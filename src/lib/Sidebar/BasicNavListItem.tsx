import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import {
    ChatBubble as ChatBubbleIcon,
    FactoryOutlined,
    KeyOutlined,
    AssignmentTurnedInOutlined,
    TextSnippetOutlined,
    HighlightAlt,
    SupervisorAccount as AccountIcon,
    Map as MapIcon,
    Tablet as TabletIcon,
    Update as UpdateIcon,
    Security as AdminIcon,
    ContentPaste as ClipBoardIcon,
    FitScreen,
    Event as EventIcon,
    Logout as LogoutIcon
} from '@mui/icons-material'

const iconmap: any = {
    factory: FactoryOutlined,
    key: KeyOutlined,
    done: AssignmentTurnedInOutlined,
    docs: TextSnippetOutlined,
    hightlight: HighlightAlt,
    map: MapIcon,
    account: AccountIcon,
    tablet: TabletIcon,
    update: UpdateIcon,
    admin: AdminIcon,
    clipboard: ClipBoardIcon,
    fitscreen: FitScreen,
    chatBubble: ChatBubbleIcon,
    event: EventIcon,
    logout: LogoutIcon
}

function makeIcon(name: string) {
    const Icon = iconmap[name]
    return <Icon />
}

function BasicNavListItem(props: any) {
    const { spec, itemKey, onItemSelect, isAuthorized } = props

    return (
        // TODO: load user from redux store
        isAuthorized('admin', spec.item.access) && (
            <ListItem
                key={itemKey}
                disablePadding
                onClick={() => onItemSelect(spec.itemKey, spec.item)}
            >
                <ListItemButton selected={spec.viewPath == spec.itemKey}>
                    <ListItemIcon>
                        {makeIcon(spec.item.icon)}
                    </ListItemIcon>
                    <ListItemText primary={spec.item.label} />
                </ListItemButton>
            </ListItem>
        )
    )
}

export default BasicNavListItem