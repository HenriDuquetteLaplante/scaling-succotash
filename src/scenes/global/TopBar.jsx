import {Box, Icon, IconButton, InputBase, useTheme} from "@mui/material";
import {ColorModeContext, tokens} from "../../theme";
import {useContext} from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationModeOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsModeOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search"


const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext)

    return (
        <Box display={'flex'} justifyContent={'space-between'} p={2}>
            {/* SEARCH BAR */}
            <Box
                display={'flex'}
                backgroundColor={colors.grey[100]}
                borderRadius={'3px'}
            >
                <InputBase sx={{ml: 2, flex: 1}} placeholder={'Search'} />
                <IconButton type={'button'} sx={{p: 1}}>
                    <SearchIcon />
                </IconButton>
            </Box>
            {/* ICONS */}
            <Box display={'flex'}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
                </IconButton>
                <IconButton>
                    <NotificationModeOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsModeOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default TopBar;