type VerticalBarProps = {
  progress: number;
};

export default function VerticalBar({ progress }: VerticalBarProps) {
  return (
    <div>
      <div className="absolute top-5 left-5 my-8 -ml-px h-3/5 w-1 animate-pulse bg-blue-200">
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
