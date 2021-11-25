type VerticalBarProps = {
  progress: number;
};

export default function VerticalBar({ progress }: VerticalBarProps) {
  return (
    <div>
      <div className="my-8 absolute top-5 left-5 -ml-px h-3/5 bg-gray-400 animate-pulse w-1">
        <div
          className="bg-green-400"
          style={{
            width: "100%",
            height: progress.toString() + "%",
            display: "block",
            position: "absolute",
            bottom: "0",
          }}
        />
      </div>
    </div>
  );
}
