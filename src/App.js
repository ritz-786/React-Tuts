import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet, { Rest } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
// importing a style sheet
// have a scope such that it works even in child Component
import './appStyles.css'
//importing a module style sheet
//works in the component it is defined
import styles from './appStyles.module.css'
import FormComponent from './components/FormComponent';
import Lifecycle from './components/Lifecycle';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentinput from './components/FRParentInput'
import HeroParent from './components/HeroParent';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import GetPostList from './components/GetPostList';

//for name exports curly braces is required
//if we don't do name export we can export function with any name

function App() {
  return (
    <div className="App">
      {/* <ClickCounter name='Regal'/>
      <HoverCounter /> */}
      <GetPostList />
      {/* <HeroParent /> */}
      {/* <Table /> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <FocusInput /> */}
      {/* <FRParentinput /> */}
      {/* <ParentComp></ParentComp> */}
      {/* <Lifecycle></Lifecycle> */}
      {/* <FormComponent></FormComponent> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline></Inline> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <Stylesheet primary = {true}></Stylesheet> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <Counter></Counter> */}
      {/* <Greet></Greet> */}
      {/* since we don't have to write anything in the 
      tag so can be converted to empty tag */}
      {/* <Rest name='Bruce' heroName='Batman'>
        <p>A paragraph</p>
      </Rest>
      <Rest name='Clark' heroName='Superman'>
        <button>Action</button>
      </Rest>
      <Rest name='Diana' heroName='Wonder Woman'></Rest> */}
      {/* <Welcome name='Bruce' heroName='Batman' />
      <Welcome name='Clark' heroName='Superman' />
      <Welcome name='Diana' heroName='Wonder Woman' /> */}
      {/* <Hello /> */}
      {/* <Message></Message> */}
    </div>
  );
}

export default App;
