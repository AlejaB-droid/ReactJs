
import React from "react";
import Color from "./Color";

export default function ColorList ({colors=[], onRemoveColor = id => id}) {
    if (!colors.length) {
        return (
            <div>
                There are no colors :c
            </div>
        )
    }

    return (
        <div>
            {colors.map(color => (
                <Color key={color.id}
                {...color}
                onRemove={onRemoveColor}
                />
            ))}
        </div>
    );
}

