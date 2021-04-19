import React, { useState } from 'react';

const content = [
    {
        id: 0,
        tab: "haha1",
        content: "content1",
    },
    {
        id: 1,
        tab: "haha2",
        content: "content2",
    },
    {
        id: 2,
        tab: "haha3",
        content: "content3",
    }
];


const useTabs = (initialTab, allTabs)=> {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    
    if (!allTabs || !Array.isArray(allTabs)) {
        return ;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
    
}

const UseTabsApp = ()=> {
    const {currentItem, changeItem} = useTabs(1, content);
    return (
      <div className="App">
        {content.map((section, index)=>
            <button key={section.id} onClick={() => changeItem(index)}>{section.tab}</button>    
        )}
        {currentItem.content}
      </div>
    );
}

export default UseTabsApp;
  