import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const CommonModal = ({
  modalContent,
  modalChildren,
  title = "Modal",
  size = "md",
  ...props
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {/* Trigger Button */}
      <button onClick={open}>{modalChildren}</button>

      {/* Modal */}
      <Modal
        opened={opened}
        onClose={close}
        size={size}
        title={title}
        {...props}
        styles={{
          header: {
            padding: "0px 20px",
            color: "white",
          },
        }}
      >
        {modalContent}
      </Modal>
    </>
  );
};

export default CommonModal;
