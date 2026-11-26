import { router, json, requireAuth, db } from '@appdeploy/sdk';

function learnerTable(userId: string) {
  const safeUserId = userId.replace(/[^a-zA-Z0-9]/g, '');
  return 'learners_' + safeUserId;
}

const allowedClasses = new Set([
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
]);

export const handler = router({
  'GET /api/learners': [
    requireAuth(),
    async (ctx) => {
      const result = await db.list(learnerTable(ctx.user!.userId), { limit: 50 });
      return json({ learners: result.items });
    },
  ],
  'POST /api/learners': [
    requireAuth(),
    async (ctx) => {
      const body = ctx.body as { nickname?: unknown; classLevel?: unknown };
      const nickname = typeof body.nickname === 'string' ? body.nickname.trim() : '';
      const classLevel = typeof body.classLevel === 'string' ? body.classLevel : '';
      if (nickname.length < 2 || nickname.length > 20) {
        return json({ error: 'Nickname must be 2 to 20 characters.' }, 400);
      }
      if (!allowedClasses.has(classLevel)) {
        return json({ error: 'Choose a supported school class.' }, 400);
      }
      const createdAt = new Date().toISOString();
      const ids = await db.add(learnerTable(ctx.user!.userId), [
        { nickname, classLevel, createdAt },
      ]);
      if (!ids[0]) return json({ error: 'Could not create learner profile.' }, 500);
      return json({ learner: { id: ids[0], nickname, classLevel, createdAt } }, 201);
    },
  ],
  'DELETE /api/learners/:id': [
    requireAuth(),
    async (ctx) => {
      const deleted = await db.delete(learnerTable(ctx.user!.userId), [ctx.params.id]);
      return json({ deleted: deleted[0] === true });
    },
  ],
});
