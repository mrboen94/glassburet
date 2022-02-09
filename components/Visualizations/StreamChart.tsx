import { ResponsiveStream } from "@nivo/stream";
import { keys } from "../../lib/keyData";

export default function StreamChart({
  data,
  mobile,
}: {
  data: any;
  mobile: boolean;
}) {
  return (
    <div className="min-h-96 h-96 w-full py-12">
      <ResponsiveStream
        data={data}
        keys={keys}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legendOffset: 40,
          legend: "Track number",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Total points",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        enableGridX={true}
        enableGridY={false}
        offsetType="diverging"
        order="ascending"
        colors={{ scheme: "nivo" }}
        fillOpacity={0.85}
        borderColor={{ theme: "background" }}
        legends={[
          {
            anchor: mobile ? "right" : "top",
            direction: mobile ? "column" : "row",
            translateX: mobile ? 90 : 0,
            translateY: mobile ? 0 : -50,
            itemWidth: 80,
            itemHeight: 16,
            itemTextColor: "#999999",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",

                style: {
                  itemTextColor: "#000000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
