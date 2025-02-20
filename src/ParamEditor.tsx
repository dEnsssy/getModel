import React, { useState } from "react";

interface Param {
    id: number;
    name: string;
    type: "string";
}

interface ParamValue {
    paramId: number;
    value: string;
}

interface Model {
    paramValues: ParamValue[];
}

interface Props {
    params: Param[];
    model: Model;
}

const ParamEditor: React.FC<Props> = ({ params, model }) => {
    const [paramValues, setParamValues] = useState<ParamValue[]>(
        model.paramValues
    );

    // тут написал обработчик для изменения значения параметра
    const handleChange = (paramId: number, newValue: string) => {
        setParamValues((prevValues) =>
            prevValues.map((p) =>
                p.paramId === paramId ? { ...p, value: newValue } : p
            )
        );
    };

    // Метод для получения актуального Model
    const getModel = (): Model => {
        return { paramValues };
    };

    return (
        <div>
            <h2>Редактирование параметров</h2>
            {params.map((param) => {
                const paramValue =
                    paramValues.find((p) => p.paramId === param.id)?.value ||
                    "";

                return (
                    <div key={param.id} style={{ marginBottom: "10px" }}>
                        <label>
                            <strong>{param.name}</strong>
                        </label>
                        <input
                            type="text"
                            value={paramValue}
                            onChange={(e) =>
                                handleChange(param.id, e.target.value)
                            }
                            style={{ marginLeft: "10px", padding: "5px" }}
                        />
                    </div>
                );
            })}

            <button
                onClick={() => console.log(getModel())}
                style={{ marginTop: "20px", padding: "10px" }}
            >
                Получить Model в консоль
            </button>
        </div>
    );
};

export default ParamEditor;
