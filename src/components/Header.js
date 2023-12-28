import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { InfoCircledIcon, ShuffleIcon } from "@radix-ui/react-icons";
import { rules } from "../db";

export function Header({ onShuffle }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <label className="absolute left-2 top-4">evo gaming</label>
      <button
        onClick={onShuffle}
        className="absolute right-14 top-2 bg-orange-500 rounded-full p-1 flex justify-center items-center"
      >
        <ShuffleIcon className="w-8 h-8" color="white" />
      </button>
      <button
        onClick={open}
        className="absolute right-2 top-2 bg-orange-500 rounded-full p-1 flex justify-center items-center"
      >
        <InfoCircledIcon className="w-8 h-8" color="white" />
      </button>
      <Modal
        classNames={{
          body: "bg-red-600",
          content: "!bg-red-600",
          root: "bg-red-600",
          header: "bg-red-600",
        }}
        opened={opened}
        onClose={close}
        title="Kurallar"
        centered
      >
        {rules.map((rule) => (
          <h5 key={rule} className="mb-2">
            * {rule}
          </h5>
        ))}
      </Modal>
    </div>
  );
}
