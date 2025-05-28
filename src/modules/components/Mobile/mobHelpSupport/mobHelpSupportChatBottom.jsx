import { Box, TextField, IconButton, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const MobHelpSupportChatBottom = () => {
  return (
     <Box sx={{ pb: 10 }}> {/* Padding to avoid overlap when scrolling */}
      {/* Chat content would go here */}

      {/* Fixed Bottom Input Area */}
      <Paper
        elevation={3}
        sx={{
            borderRadius:0,
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: 1,
          zIndex: 10,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Type your message..."
          size="small"
          fullWidth
          sx={{ mr: 1 }}
        />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </Paper>
    </Box>
  )
}

export default MobHelpSupportChatBottom