import React from "react";
import { createRoot } from "react-dom/client";
import { DropEvent } from "@mirohq/websdk-types";

const BORDER_STYLE = "normal";
const BORDER_WIDTH = 2;
const BORDER_COLOR = "#000000";
const BORDER_OPACITY = 1.0; // Default: no opacity
const COLOR_SHAPE_FILL = "transparent"; // Default: transparent (no fill)
const FILL_OPACITY = 1.0;

const COLOR_TEXT = "#000000"; // Default: '#1a1a1a' (black)
const FONT_FAMILY = "arial"; // Default: 'Arial'
const FONT_SIZE = 14; // Default: 14 (in dp)
const TEXT_ALIGN = "left"; // Default: 'left'
const TEXT_ALIGN_VERTICAL = "top"; // Default: 'top'

const App: React.FC = () => {
  const drop = async (e: DropEvent) => {
    const { x, y, target } = e;
    console.log(target);

    if (target.hasAttribute("data-srml")) {
      switch (target.getAttribute("data-srml")) {
        case "component":
          await miro.board.createShape({
            content:
              "<p><strong>Component Name</strong></p>Brief one or two sentence description of the component's responsibility.",
            shape: "rectangle",
            style: {
              color: COLOR_TEXT,
              fillColor: COLOR_SHAPE_FILL,
              fontFamily: FONT_FAMILY,
              fontSize: FONT_SIZE,
              textAlign: TEXT_ALIGN,
              textAlignVertical: TEXT_ALIGN_VERTICAL,
              borderStyle: BORDER_STYLE,
              borderOpacity: BORDER_OPACITY,
              borderColor: BORDER_COLOR,
              borderWidth: BORDER_WIDTH,
              fillOpacity: FILL_OPACITY,
            },
            x: x,
            y: y,
            width: 200,
            height: 100,
          });
      }
    }
  };

  React.useEffect(() => {
    miro.board.ui.on("drop", drop);
  }, []);

  return (
    <div className="grid">
      <div className="cs1 ce3">
        <img
          src="/src/assets/srml-component.png"
          draggable={false}
          className="miro-draggable draggable-item"
          data-srml="component"
          title="SRML Component"
        />
      </div>
      <div className="cs4 ce12">
        <p>
          <strong>Component</strong>
          <br />
          Part of the system with some distinct responsibility.
        </p>
      </div>
      <div className="cs1 ce12">
        <p>
          Drag an SRML element to the board and drop where it should appear.
        </p>
      </div>
    </div>
  );
};

const container = document.createElement("div");
document.body.insertBefore(container, document.body.firstChild);

const root = createRoot(container);
root.render(<App />);
