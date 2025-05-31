import { Box, TextField, IconButton, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add'; // Plus symbol
import MicIcon from '@mui/icons-material/Mic'; // Voice icon

const MobHelpSupportChatBottom = () => {
  return (
    <Box sx={{ pb: 10 }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 0,
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          px: 1,
          py: 1,
          zIndex: 10,
          gap: 1,
        }}
      >
        {/* Plus icon button on left */}
        <IconButton color="primary" sx={{ ml: 0 }}>
          <AddIcon />
        </IconButton>

        {/* Text input */}
        <TextField
          variant="outlined"
          placeholder="Type your message..."
          size="small"
          fullWidth
        />

        {/* Send button */}
        <IconButton color="primary">
          <SendIcon />
        </IconButton>

        {/* Voice/mic icon on extreme right */}
        <IconButton color="primary" sx={{ ml: 'auto' }}>
          <MicIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default MobHelpSupportChatBottom;
