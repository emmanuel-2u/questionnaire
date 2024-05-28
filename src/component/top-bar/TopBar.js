export default function TopBar({ length, selected }) {
    return (
        <div className="container is-fullhd">
            <div className="columns is-mobile">
                {Array.from({ length }).map((_, i) => {
                    return (
                        <div
                            key={i}
                            className={`column bar no-padding ${i < selected ? 'bar-selected-color' : 'bar-default-color'}`}
                            style={{ width: (100 / 20) - 4 + "%", height: '6px' }}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}