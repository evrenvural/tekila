import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { InfoCircledIcon, ShuffleIcon } from "@radix-ui/react-icons";
import { rules } from "../db";

export function Header({ onShuffle }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <div className="absolute left-4 top-4 text-2xl text-center text-gray-300">
        <h1>evo</h1>
        <p>gaming</p>
      </div>
      <button
        onClick={onShuffle}
        className="absolute right-16 top-7 bg-orange-500 rounded-full p-1 flex justify-center items-center"
      >
        <ShuffleIcon className="w-8 h-8" color="white" />
      </button>
      <button
        onClick={open}
        className="absolute right-4 top-7 bg-orange-500 rounded-full p-1 flex justify-center items-center"
      >
        <InfoCircledIcon className="w-8 h-8" color="white" />
      </button>
      <Modal
        classNames={{
          header: "!bg-zinc-800",
          body: "bg-zinc-800",
          inner: "text-white",
        }}
        opened={opened}
        onClose={close}
        title="Kurallar"
        centered
      >
        {rules.map((rule) => (
          <h5 key={rule} className="pt-2">
            * {rule}
          </h5>
        ))}
      </Modal>
    </div>
  );
}
