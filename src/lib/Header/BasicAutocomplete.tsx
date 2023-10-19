import {
    TextField,
    Autocomplete,
    createFilterOptions
} from '@mui/material'

const filter = createFilterOptions()

function resolveOptions(tooldef: any, tooldata: any) {
    let options = []

    if (tooldef.options.kind === 'ent' && tooldata[tooldef.name]) {
        const ents = tooldata[tooldef.name].ents || []
        options = ents.map((ent: any) => ({
            label: ent[tooldef.options.label.field],
            ent
        }))
    }

    return options
}

function BasicAutoComplete(props: any) {
    const { seneca, tooldef, tooldata, valuemap } = props

    return (
        <Autocomplete
            freeSolo
            forcePopupIcon
            value={valuemap[tooldef.name] || tooldef.defaultvalue || ''}
            key={tooldef.name}
            options={resolveOptions(tooldef, tooldata)}
            // disableClearable={ typeof vxg.cmp.BasicHead.tool[tooldef.name].selected != 'object' }
            size='small'
            sx={{
                paddingLeft: '1em',
                width: '20rem'
            }}
            filterOptions={(options: any, params: any) => {
                const filtered = filter(options, params)
                // const { inputValue } = params
                return filtered
            }}
            renderInput={(params) => <TextField {...params} label={tooldef.title} />}
            onChange={(event: any, newval: any) => {
                seneca.act('aim:app,set:state', {
                    section: 'vxg.cmp.BasicHead.tool.' + tooldef.name + '.selected',
                    content: tooldef.mode == 'search' && typeof newval === 'string'
                        ? { [tooldef.options.label.field]: newval }
                        : newval?.ent
                })
            }}
            isOptionEqualToValue={(opt: any, val: any) =>
                (opt === val) || (opt != null && val != null && opt.ent?.id === val.ent?.id)}
        />
    )
}

export default BasicAutoComplete