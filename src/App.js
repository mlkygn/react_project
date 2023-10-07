import './style.css'
import { createElement } from "react";

import Button from "./components/Button"
import {Tab, Tabpanel} from "./components/Tab"

const title = createElement("h1" , {style:{color:'red'},className:"font-bold text-3xl"} , "Hello World" )
const list = ["item1", "item2", "item3"]

function App() {
  return (
    <main className='p-10'>
      {title}
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className='flex mt-4'>
        <Button Class="mr-2" text="Buton yazısı"/>
        <Button Class="mr-2" text="Buton yazısı" variant="success" />
        <Button text="Buton yazısı" variant="danger" />
      </div>
      <div>
        <Tab>
        </Tab>
      </div>
    </main>
  );
}

export default App;
