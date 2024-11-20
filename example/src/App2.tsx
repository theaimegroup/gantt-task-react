import { Gantt } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";


const App = () => {

    let tasks = [
        {
            start: new Date(2023, 12, 1),
            end: new Date(2024, 10, 30),
            name: 'External Wall Insulation (EWI)',
            id: '0',
            type: 'project',
            progress: 20,
            isDisabled: true
        },
        {
            start: new Date(2023, 12, 1),
            end: new Date(2024, 5, 30),
            name: 'Survey',
            id: '1',
            type: 'task',
            isDisabled: true
        },
        {
            start: new Date(2024, 3, 1),
            end: new Date(2024, 8, 30),
            name: 'Measure Wall Dimension',
            id: '2',
            type: 'task',
            isDisabled: true,
            dependencies: ['1']
        },
        {
            start: new Date(2024, 5, 1),
            end: new Date(2024, 10, 30),
            name: 'Energy Usage Analysis',
            id: '3',
            type: 'task',
            dependencies: ['1'],
            isDisabled: true
        },
        {
            start: new Date(2024, 7, 1),
            end: new Date(2024, 10, 30),
            name: 'Energy Usage Analysis',
            id: '4',
            type: 'task',
            dependencies: ['3'],
            isDisabled: true
        },
        {
            start: new Date(2023, 12, 1),
            end: new Date(2024, 5, 30),
            name: 'Energy Usage Analysis',
            id: '5',
            type: 'task',
            isDisabled: true,
        },
        {
            start: new Date(2023, 12, 1),
            end: new Date(2024, 5, 30),
            name: 'Energy Usage Analysis',
            id: '6',
            type: 'task',
            isDisabled: true,
        },
        {
            start: new Date(2023, 12, 1),
            end: new Date(2024, 5, 30),
            name: 'Energy Usage Analysis',
            id: '7',
            type: 'task',
            isDisabled: true,
        },
        {
            start: new Date(2024, 5, 1),
            end: new Date(2025, 5, 30),
            name: 'Internal Wall Insulation (IWI)',
            id: '8',
            type: 'project',
            progress: 20,
            isDisabled: true,
        },
        {
            start: new Date(2024, 9, 1),
            end: new Date(2025, 5, 30),
            name: 'Loft Insulation',
            id: '9',
            type: 'project',
            progress: 20,
            isDisabled: true
        },
    ];

    return <Gantt
        tasks={tasks}
        viewMode='Month'
        arrowColor='#FFD700'
        barProgressColor='#FFD700'
        barProgressSelectedColor='#FFD700'
        barBackgroundColor='#242424'
        barBackgroundSelectedColor='#242424'
        projectProgressColor='#FFD700'
        projectProgressSelectedColor='#FFD700'
        projectBackgroundColor='#242424'
        projectBackgroundSelectedColor='#242424'
        barFill={60}
        barCornerRadius={5}
        fontSize='10px'
        listCellWidth=""
        columnWidth={115}
    />
}

export default App;