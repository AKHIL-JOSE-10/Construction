import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MobileBottomTab from '../../../modules/components/Mobile/mobileBottomTab';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const contacts = [
  {
    id: 1,
    name: 'Anna Thomas',
    message: 'Site visit scheduled at 3 PM.',
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
    time: '10:30 AM',
  },
  {
    id: 2,
    name: 'Amanda',
    message: 'The materials have been delivered.',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    time: 'Yesterday',
  },
  {
    id: 3,
    name: 'Vismaya Rajeev',
    message: 'We need to finalize the plumbing layout.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    time: 'Monday',
  },
  {
    id: 4,
    name: 'Elanor',
    message: 'Can you check the electrical wiring plan?',
    avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
    time: '10:30 AM',
  },
  {
    id: 5,
    name: 'Jasmin',
    message: 'Waiting for approval on the floor plan.',
    avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
    time: 'Yesterday',
  },
  {
    id: 6,
    name: 'Meera Thomas',
    message: 'The tiles for the kitchen have arrived.',
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
    time: 'Monday',
  },
  {
    id: 7,
    name: 'Henna Varghese',
    message: 'We’ve scheduled the inspection for Thursday.',
    avatar: 'https://randomuser.me/api/portraits/women/73.jpg',
    time: 'Monday',
  },
];


const MobMessages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Grid>
      <Box sx={{ bgcolor: 'white' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ p: 2,pb:0, fontWeight: 600, fontSize: '20px' }}>
            Chat
          </Typography>
        </Box>

        <Box sx={{ px: 2, py: 1 }}>
          <TextField
            placeholder="Search chats"
            variant="outlined"
            size="small"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <List>
          {filteredContacts.map((contact, index) => (
            <Box key={contact.id}>
              <ListItem
                button
                onClick={() => navigate('/mobile-message-chat', { state: { contact } })}
                sx={{ py: 1.5 }}
              >
                <ListItemAvatar>
                  <Avatar src={contact.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography fontWeight={600}>{contact.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {contact.time}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {contact.message}
                    </Typography>
                  }
                />
              </ListItem>
              {index !== filteredContacts.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Box>
      <MobileBottomTab />
    </Grid>
  );
};

export default MobMessages;
