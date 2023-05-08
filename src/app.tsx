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
              "<p><strong>Component's Name</strong></p>Brief description of the component's responsibility.",
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
        <p className="p-small">
          <strong>Component</strong>
          <br />
          Part of the system with some distinct responsibility. A function,
          class, module, or even the whoile system iteself can be modeled as a
          component.
        </p>
      </div>

      <div className="cs1 ce3">
        <img
          src="/src/assets/srml-incoming-message.png"
          draggable={false}
          className="miro-draggable draggable-item"
          data-srml="incoming-message"
          title="Incoming message"
        />
      </div>
      <div className="cs4 ce12 ">
        <p className="p-small">
          <strong>Incoming Message</strong>
          <br />A message handled by the component. The set of incoming messages
          makes up the external interface of the of the component.
        </p>
      </div>

      <div className="cs1 ce3">
        <img
          src="/src/assets/srml-outgoing-message.png"
          draggable={false}
          className="miro-draggable draggable-item"
          data-srml="outgoing-message"
          title="Outgoing message"
        />
      </div>
      <div className="cs4 ce12 ">
        <p className="p-small">
          <strong>Outgoing Message</strong>
          <br />A message sent out by the component. The other component is now
          a dependency of this component.
        </p>
      </div>

      <div className="cs1 ce3">
        <img
          src="/src/assets/srml-data.png"
          draggable={false}
          className="miro-draggable draggable-item"
          data-srml="data"
          title="Data"
        />
      </div>
      <div className="cs4 ce12 ">
        <p className="p-small">
          <strong>Data</strong>
          <br />A slice of data. Use this element when data needs to be
          represented outside components and messages.
        </p>
      </div>

      <div className="cs1 ce12">
        <hr />
        <p className="p-small">
          Drag an element where it should be placed on the board. For more info
          on this notation, please visit{" "}
          <a
            href="https://srml.dev/spec"
            target="_blank"
            className="link link-text"
          >
            srml.dev/spec
          </a>
        </p>
      </div>
    </div>
  );
};

const container = document.createElement("div");
document.body.insertBefore(container, document.body.firstChild);

const root = createRoot(container);
root.render(<App />);
