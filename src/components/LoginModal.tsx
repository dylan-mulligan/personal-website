import * as React from 'react';
import { Box, Button, Modal, TextField, Typography, Backdrop, Fade } from '@mui/material';
import { styled } from '@mui/material/styles';

const ModalBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
}));

interface LoginModalProps {
    open: boolean;
    handleClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, handleClose }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleLogin = () => {
        if (!username) {
            setError('Username is required');
            return;
        }
        if (!password) {
            setError('Password is required');
            return;
        }

        // TODO: Implement login logic
        setError('Incorrect username or password');
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <ModalBox>
                    <Typography variant="h6" component="h2">
                        Sign In
                    </Typography>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && (
                        <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                            {error}
                        </Typography>
                    )}
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        sx={{ mt: 2 }}
                    >
                        Login
                    </Button>
                </ModalBox>
            </Fade>
        </Modal>
    );
};

export default LoginModal;