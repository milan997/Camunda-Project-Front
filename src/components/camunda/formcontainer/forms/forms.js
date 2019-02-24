import React from 'react';

import Task01 from './Task01';
import Task02 from './Task02';
import Task03 from './Task03';
import Task04 from './Task04';
import Task05 from './Task05';
import Task06 from './Task06';
import Task07A from './Task07A';
import Task07B from './Task07B';
import Task08 from './Task08';
import Task09 from './Task09';
import Task10 from './Task10';
import Task10A from './Task10A';
import Task11 from './Task11';
import Task12 from './Task12';
import Task12A from './Task12A';
import Task13 from './Task13';
import Task14 from './Task14';
import Task15 from './Task15';
import Task16 from './Task16';


const getFormFromFormKey = (formKey) => {
    switch (formKey) {
        case '/Task01.html': return <Task01 />;
        case '/Task02.html': return <Task02 />;
        case '/Task03.html': return <Task03 />;
        case '/Task04.html': return <Task04 />;
        case '/Task05.html': return <Task05 />;
        case '/Task06.html': return <Task06 />;
        case '/Task07A.html': return <Task07A />;
        case '/Task07B.html': return <Task07B />;
        case '/Task08.html': return <Task08 />;
        case '/Task09.html': return <Task09 />;
        case '/Task10.html': return <Task10 />;
        case '/Task10A.html': return <Task10A />;
        case '/Task11.html': return <Task11 />;
        case '/Task12.html': return <Task12 />;
        case '/Task12A.html': return <Task12A />;
        case '/Task13.html': return <Task13 />;
        case '/Task14.html': return <Task14 />;
        case '/Task15.html': return <Task15 />;
        case '/Task16.html': return <Task16 />;
        default: console.log('form not found:', formKey); alert('form not found\n' + formKey);
    }
}

export default getFormFromFormKey;