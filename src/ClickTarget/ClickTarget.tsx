interface ClickTargetProps {
  onClick: () => void;
}

export default function ClickTarget({ onClick }: ClickTargetProps) {
  return (
    <button
      className="w-xl h-lg color-blueGray border-style-none"
      onClick={onClick}
    >
      Click me!
    </button>
  );
}
