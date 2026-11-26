import React from 'react';

type RoadmapTopic = {
  title: string;
  detail: string;
  available: boolean;
};

type GradeRoadmap = {
  heading: string;
  intro: string;
  topics: RoadmapTopic[];
  note: string;
};

const roadmaps: Record<string, GradeRoadmap> = {
  'Class 6': {
    heading: 'Class 6 · Biology learning map',
    intro: 'Biology ideas are part of integrated Science at this stage. These strands follow the themes used in NCERT Curiosity and CBSE middle-stage learning; they are not a separate Biology subject.',
    topics: [
      { title: 'Diversity in the living world', detail: 'Observe plants, animals and microorganisms; compare living things and understand biodiversity.', available: true },
      { title: 'Food, nutrients and a healthy body', detail: 'Food sources, nutrients, balanced meals, water, fibre and healthy food habits.', available: true },
      { title: 'Living creatures, habitats and adaptations', detail: 'Life processes, habitats, survival features and relationships with surroundings.', available: true },
      { title: 'Plants around us', detail: 'Roots, stems, leaves, flowers, seeds and how plant parts help plants live.', available: true },
      { title: 'Movement and support in animals', detail: 'Bones, joints, muscles and how animals move in different ways.', available: true },
      { title: 'Health, hygiene and the environment', detail: 'Safe water, cleanliness, mosquito awareness and caring for local habitats.', available: true }
    ],
    note: 'The number above counts actual lesson cards, not topic headings. One lesson may cover more than one topic. Classes 6–8 are integrated Science levels; this Biology map is a learning guide, not a separate official Biology subject or a replacement for the current Curiosity textbook.'
  },
  'Class 7': {
    heading: 'Class 7 · Biology learning map',
    intro: 'These Biology-related strands sit within integrated CBSE Science and are taught with simple investigations, stories and diagrams.',
    topics: [
      { title: 'Life processes in plants', detail: 'Root absorption, photosynthesis, stomata, xylem, phloem and movement of materials.', available: true },
      { title: 'Life processes in animals', detail: 'Digestion, breathing, circulation, transport and removal of wastes.', available: true },
      { title: 'Adolescence and growing up', detail: 'Growth, puberty, hormones, hygiene and respectful health awareness.', available: true },
      { title: 'Reproduction in plants', detail: 'Asexual reproduction, flowers, pollination, fertilisation and seed dispersal.', available: true },
      { title: 'Nutrition and digestion in living things', detail: 'How plants make food and how different animals obtain and digest food.', available: true },
      { title: 'Forests, soil and living communities', detail: 'Food relationships, decomposers, soil health and the importance of forests.', available: true }
    ],
    note: 'The number above counts actual lesson cards, not topic headings. One lesson may cover more than one topic. Classes 6–8 are integrated Science levels; follow the order and depth in your school’s current Curiosity textbook.'
  },
  'Class 8': {
    heading: 'Class 8 · Biology learning map',
    intro: 'These Biology-related themes connect health, microorganisms, cells and ecosystems within the integrated Science curriculum.',
    topics: [
      { title: 'The invisible living world', detail: 'Bacteria, fungi, protozoa, microscopic algae, viruses and their roles.', available: true },
      { title: 'Health: the ultimate treasure', detail: 'Well-being, disease transmission, prevention, hygiene and responsible healthcare.', available: true },
      { title: 'Nature in harmony: ecosystems and Earth', detail: 'Food webs, biodiversity, natural cycles, conservation and human impact.', available: true },
      { title: 'Cell structure and function', detail: 'Cell membrane, cytoplasm, nucleus and the differences between plant and animal cells.', available: true },
      { title: 'Reproduction and life cycles', detail: 'How plants and animals reproduce and how young organisms develop.', available: true },
      { title: 'Conservation of plants and animals', detail: 'Habitats, threatened species, protected areas and sustainable choices.', available: true }
    ],
    note: 'The number above counts actual lesson cards, not topic headings. One lesson may cover more than one topic. Classes 6–8 are integrated Science levels; use the current Curiosity textbook and teacher’s sequence as the final guide.'
  },
  'Class 9': {
    heading: 'Class 9 · CBSE Science Biology map',
    intro: 'Mapped to the Biology themes in NCERT’s Grade 9 Secondary Stage Phase I syllabus for 2026–27. Science remains an integrated subject.',
    topics: [
      { title: 'Cell', detail: 'Cell discovery, plant and animal cells, prokaryotic and eukaryotic cells, organelles, membrane transport and cell division.', available: true },
      { title: 'Tissues', detail: 'Plant and animal tissues, meristematic and permanent tissues, muscle, nervous and connective tissues.', available: true },
      { title: 'Diversity', detail: 'Classification, five kingdoms, major plant and animal groups, binomial nomenclature and viruses.', available: true },
      { title: 'Reproduction', detail: 'Asexual and sexual reproduction, flowering plants, human reproduction, reproductive health and hygiene.', available: true },
      { title: 'Ecosystems and Earth systems', detail: 'Levels of organisation, organism interactions, biomes and the water, carbon, nitrogen and oxygen cycles.', available: true },
      { title: 'Heredity and variation', detail: 'DNA, genes, chromosomes, inheritance patterns and biological variation.', available: true }
    ],
    note: 'The number above counts actual lesson cards, not topic headings. Some themes are combined in one lesson. The Class 9 mapping follows NCERT’s published 2026–27 Secondary Stage Phase I draft; check for later official revisions.'
  },
  'Class 10': {
    heading: 'Class 10 · CBSE Science Biology map',
    intro: 'A Biology-focused map within the integrated CBSE Science subject. Match the sequence and examinable depth with the current textbook and school plan.',
    topics: [
      { title: 'Life processes', detail: 'Nutrition, respiration, transport and excretion in plants and animals.', available: true },
      { title: 'Control and coordination', detail: 'Nervous coordination, reflex actions, hormones and plant responses.', available: true },
      { title: 'Reproduction', detail: 'Asexual and sexual reproduction, reproductive systems, fertilisation and reproductive health.', available: true },
      { title: 'Heredity and evolution', detail: 'Inherited traits, variation, Mendelian ideas and the evidence and mechanisms of evolution.', available: true },
      { title: 'Our environment', detail: 'Ecosystems, food chains, energy flow, waste and environmental balance.', available: true },
      { title: 'Health and scientific applications', detail: 'Disease prevention, public health, responsible use of biological knowledge and evidence.', available: true }
    ],
    note: 'The number above counts actual lesson cards, not topic headings. Some themes are combined in one lesson. Science remains an integrated subject; use the official CBSE syllabus and school-prescribed textbook for exact examinable scope.'
  }
};

export default function CbseRoadmap({ level, lessonCount }: { level: string; lessonCount: number }) {
  const roadmap = roadmaps[level];
  if (!roadmap) return null;

  return (
    <section className='bb-cbse-roadmap' id='cbse-roadmap'>
      <div className='bb-roadmap-heading'>
        <div>
          <span className='section-kicker'>CBSE · BIOLOGY TOPIC CHECKLIST</span>
          <h2>{roadmap.heading}</h2>
          <p>{roadmap.intro}</p>
        </div>
        <div className='bb-roadmap-progress'>
          <strong>{lessonCount}</strong>
          <span>lessons currently available</span>
          <small>{roadmap.topics.length} topic areas in this learning map</small>
        </div>
      </div>
      <div className='bb-roadmap-grid'>
        {roadmap.topics.map((topic, index) => (
          <article className='bb-roadmap-topic' key={topic.title}>
            <div className='bb-roadmap-topic-top'>
              <span className='bb-roadmap-number'>{String(index + 1).padStart(2, '0')}</span>
              <span className={topic.available ? 'bb-roadmap-status is-available' : 'bb-roadmap-status'}>
                {topic.available ? 'Topic in learning map' : 'Topic planned'}
              </span>
            </div>
            <h3>{topic.title}</h3>
            <p>{topic.detail}</p>
          </article>
        ))}
      </div>
      <p className='bb-roadmap-note'>{roadmap.note}</p>
      <div className='bb-roadmap-sources'>
        <a href='https://cbseacademic.nic.in/curriculum_2027.html' target='_blank' rel='noreferrer'>CBSE 2026–27 curriculum</a>
        <a href='https://ncert.nic.in/textbook.php' target='_blank' rel='noreferrer'>NCERT textbooks</a>
        {level === 'Class 9' && <a href='https://ncert.nic.in/pdf/announcement/Syllabus_Secondary_Stage_Phase_I_Grade_9_Part_2.pdf' target='_blank' rel='noreferrer'>NCERT Grade 9 syllabus document</a>}
      </div>
    </section>
  );
}
