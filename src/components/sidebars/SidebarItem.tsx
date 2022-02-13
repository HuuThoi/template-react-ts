const SidebarItem = (props: any) => {
    const active = props.active ? 'active' : '';
    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i>{props.icon}</i>
                <span>
                    {props.title}
                </span>
            </div>
            <span className="tooltip">{props.title}</span>
        </div>
    )
}

export default SidebarItem;