

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-[50%] my-8">
           
            <h3 className="text-3xl uppercase text-[#65799b] border-y-4 py-4">{heading}</h3>
            <p className="text-primary mb-2">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;