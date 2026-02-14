export const DEPARTMENTS = [
    'CS',
    'Math',
    'English'
];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) =>({
    value: dept,
    label: dept,
}));

export const SUBJECTS = [
    {
        id: 1,
        code: 'CS101',
        name: 'Introduction to Computer Science',
        department: 'CS',
        description: 'An introductory course covering the fundamental concepts of computing and programming.',
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: 'MATH201',
        name: 'Calculus II',
        department: 'Math',
        description: 'A study of integration, series, and polar coordinates.',
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: 'ENG102',
        name: 'Literature and Composition',
        department: 'English',
        description: 'Developing advanced writing skills through the study of major literary works.',
        createdAt: new Date().toISOString(),
    },
];