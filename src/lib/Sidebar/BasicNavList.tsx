import { Divider, List } from "@mui/material"
import BasicNavListItem from "./BasicNavListItem"

function BasicNavList(props: any) {
    const { spec, sectionKey, isAuthorized, onItemSelect } = props

    return (
        <List key={sectionKey}>
            {
                Object.entries(spec.section.items).map(([itemKey, item]: [any, any]) => {
                    // TODO: do we need to pass viewPath?
                    const navListItemSpec = {
                        item: item,
                        viewPath: spec.viewPath
                    }
                    return (
                        <BasicNavListItem key={itemKey} spec={navListItemSpec} isAuthorized={isAuthorized} onItemSelect={onItemSelect} />
                    )
                })
            }
            <Divider />
        </List>
    )
}

export default BasicNavList