import ParamEditor from "./ParamEditor";

interface Param {
    id: number;
    name: string;
    type: "string"; // Литеральный тип
}

const params: Param[] = [
    { id: 1, name: "Назначение", type: "string" },
    { id: 2, name: "Длина", type: "string" },
];

const model = {
    paramValues: [
        { paramId: 1, value: "повседневное  ла ла ла" },
        { paramId: 2, value: "макси ой ой ой" },
    ],
};

function App() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Редактор параметров</h1>
            <ParamEditor params={params} model={model} />
        </div>
    );
}

export default App;
