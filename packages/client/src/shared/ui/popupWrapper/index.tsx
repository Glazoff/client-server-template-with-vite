import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '40px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '12px;',
};

type PopupWrapperProps = {
  open: boolean;
  handleClose: () => void;
  handleOpen?: () => void;
  children: React.ReactNode;
};

export default function PopupWrapper({ open, handleClose, children }: PopupWrapperProps) {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </Modal>
    </>
  );
}
