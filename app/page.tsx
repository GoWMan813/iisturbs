import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "50px",
          }}
        >
          <RoughNotationGroup show={true}>
            <RoughNotation
              type="strike-through"
              color="black"
              animationDelay={3000}
              animationDuration={1500}
              iterations={1}
              strokeWidth={10}
            >
              <RoughNotation
                type="crossed-off"
                color="red"
                animationDelay={1000}
                animationDuration={1500}
                iterations={1}
              >
                YES
              </RoughNotation>
            </RoughNotation>
          </RoughNotationGroup>
        </div>
        <div
          style={{
            position: "absolute",
            top: 100,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "50px",
          }}
        >
          <RoughNotationGroup show={true}>
            <RoughNotation
              type="highlight"
              color="yellow"
              animationDelay={8000}
              animationDuration={1500}
              iterations={1}
            >
              NO
            </RoughNotation>
          </RoughNotationGroup>
        </div>
        <RoughNotationGroup show={true}>
          <div
            style={{
              position: "relative",
              top: 300,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "24px",
            }}
          >
            Updating&nbsp;
            <RoughNotation type="underline" color="black" iterations={1} animationDelay={10000}>
              anything
            </RoughNotation>
            &nbsp;right before you stream is a&nbsp;
            <RoughNotation type="circle" color="red" iterations={3} animationDelay={11000}>
              <RoughNotation type="underline" color="black" iterations={1} animationDelay={10500}>
                very bad idea!
              </RoughNotation>
            </RoughNotation>
          </div>
        </RoughNotationGroup>
        <RoughNotationGroup show={true}>
          <div
            style={{
              position: "relative",
              top: 400,
              left: "5%",
              transform: "translateX(-50%)",
              fontSize: "24px",
            }}
          >
            &nbsp;&nbsp;Please make sure to update any&nbsp;
            <RoughNotation
              type="highlight"
              color="yellow"
              animationDelay={15000}
              animationDuration={1500}
              iterations={1}
            >
              bots
            </RoughNotation>
            ,
            <RoughNotation
              type="highlight"
              color="yellow"
              animationDelay={15500}
              animationDuration={1500}
              iterations={1}
            >
              &nbsp;software
            </RoughNotation>
            , or&nbsp;
            <RoughNotation
              type="highlight"
              color="yellow"
              animationDelay={16000}
              animationDuration={1500}
              iterations={1}
            >
              peripherals&nbsp;
            </RoughNotation>
            well in
            <RoughNotation
              type="circle"
              color="red"
              animationDelay={16500}
              animationDuration={1500}
              iterations={3}
            >
              &nbsp;ADVANCE.
            </RoughNotation>
          </div>
        </RoughNotationGroup>
        <RoughNotationGroup show={true}>
          <div
            style={{
              position: "absolute",
              top: 500,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "24px",
            }}
          >
            This gives you time to address
            <RoughNotation
              type="box"
              color="red"
              animationDelay={25000}
              animationDuration={1500}
              iterations={4}
            >
              &nbsp;any errors or issues&nbsp;
            </RoughNotation>
            that may arise due to updates&nbsp;
            <RoughNotation
              type="box"
              color="red"
              animationDelay={25500}
              animationDuration={1500}
              iterations={4}
            >
              BEFORE&nbsp;
            </RoughNotation>
            you run into issues while you are&nbsp;
            <RoughNotation
              type="circle"
              color="red"
              animationDelay={26000}
              animationDuration={1500}
              iterations={10}
            >
              LIVE!&nbsp;&nbsp;
            </RoughNotation>
          </div>
        </RoughNotationGroup>
        <RoughNotationGroup show={true}>
          <div
            style={{
              position: "absolute",
              top: 650,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "24px",
            }}
          >
            <RoughNotation
              type="bracket"
              color="red"
              animationDelay={30000}
              animationDuration={1500}
              brackets={["left", "right"]}
              strokeWidth={3}
              padding={[2, 10]}
            >
              Unless your niche is a broken stream then&nbsp;
              <RoughNotation
                type="highlight"
                color="yellow"
                animationDelay={35000}
                animationDuration={1500}
                iterations={1}
              >
                YOLO!
              </RoughNotation>
            </RoughNotation>
          </div>
        </RoughNotationGroup>
      </div>
    </main>
  );
}
