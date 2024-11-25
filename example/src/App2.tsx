import React from 'react';
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
            name: 'Variation',
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
            start: new Date(2023, 12, 1),
            end: new Date(2024, 5, 30),
            name: 'Energy Usage Analysis',
            id: '8',
            type: 'task',
            isDisabled: true,
        },
        {
            start: new Date(2024, 5, 1),
            end: new Date(2025, 5, 30),
            name: 'Internal Wall Insulation (IWI)',
            id: '9',
            type: 'project',
            progress: 20,
            isDisabled: true,
        },
        {
            start: new Date(2024, 9, 1),
            end: new Date(2025, 5, 30),
            name: 'Loft Insulation',
            id: '10',
            type: 'project',
            progress: 20,
            isDisabled: true
        },
    ];

    return <Gantt
        tasks={tasks}
        viewMode='Month'
        arrowColor='rgba(237, 255, 0, 1)'
        barProgressColor='rgba(237, 255, 0, 1)'
        barProgressSelectedColor='rgba(237, 255, 0, 1)'
        barBackgroundColor='#242424'
        barBackgroundSelectedColor='#242424'
        projectProgressColor='rgba(237, 255, 0, 1)'
        projectProgressSelectedColor='rgba(237, 255, 0, 1)'
        projectBackgroundColor='rgba(37, 36, 36, 1)'
        projectBackgroundSelectedColor='rgba(37, 36, 36, 1)'
        barFill={60}
        barCornerRadius={10}
        fontSize='12px'
        fontFamily='DM Sans'
        listCellWidth=""
        columnWidth={115}
    />
}

export default App;