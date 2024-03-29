import Image from 'next/image';

const InnovativeEc3 = ({className = 'innovative-wrapper'}) => {
    return (
        <div className={className}>
            <div className="innovative">
                <div className="inner">
                    <div className="row">
                        <div className="item">
                            <div className="avatar">
                                <Image width={35} height={35} src="/images/innovative/avatar-1.svg" alt="Icon" />
                            </div>
                            <h4 className="title">Low-Carbon Lifestyle</h4>
                            <p className="text">The emission reduction actions marked by tokens are linked to emission reduction credits.</p>
                        </div>
                        <div className="item">
                            <div className="avatar"><Image width={35} height={35} src="/images/innovative/avatar-2.svg" alt="Icon" /></div>
                            <h4 className="title">Stable Grid</h4>
                            <p className="text">Distributed storage network boosts grid stability, ensuring a more reliable energy supply.</p>
                        </div>
                    </div>
                </div>
                <h2 className="innovative-main__title">
                    <strong>Innovative</strong> distributed energy storage
                </h2>
                <h3 className="innovative-sub__title">Perfect fusion of residential distributed storage devices and mining machines</h3>
                <div className="inner">
                    <div className="row">
                        <div className="item">
                            <div className="avatar"><Image width={35} height={35} src="/images/innovative/avatar-3.svg" alt="Icon" /></div>
                            <h4 className="title">DID Technology</h4>
                            <p className="text">tandardized DID technology enhances network scalability, interoperability, and reliability.</p>
                        </div>
                        <div className="item">
                            <div className="avatar"><Image width={35} height={35} src="/images/innovative/avatar-4.svg" alt="Icon" /></div>
                            <h4 className="title">Incentives</h4>
                            <p className="text">Tokens earned during discharge offer hope amid reduced subsidies, countering market expectations decline.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default InnovativeEc3;
