import Heading from "./components/Heading.tsx";
import {Section} from "./components/Section.tsx";
import Counter from "./components/Counter.tsx";
import {useState} from "react";
import List from "./components/List.tsx";

function App() {
    const [count, setCount] = useState<number>(1);
    return (
        <>
            <Heading title={"Hello"}/>
            <Section title={"SubHeading"}>
                This is my Section.
            </Section>
            <Counter setCount={setCount}>Count is {count}</Counter>
            <List
                items={["Coffee", "Tacos","Code"]}
                render={(item: string) => <span className={"gold"}>{item}</span>}
            ></List>
        </>
    )
}

export default App
