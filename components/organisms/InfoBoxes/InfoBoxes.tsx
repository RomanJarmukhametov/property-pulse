import InfoBox from '@/components/molecules/InfoBox/InfoBox';

const InfoBoxes = () => {
  const infoBoxData = [
    {
      id: 1,
      heading: 'For Renters',
      description: 'Find your dream rental property. Bookmark properties and contact owners.',
      backgroundColor: 'bg-gray-100',
      buttonInfo: { text: 'Browse Properties', link: '/properties', backgroundColor: 'bg-black' },
    },

    {
      id: 2,
      heading: 'For Property Owners',
      description:
        'List your properties and reach potential tenants. Rent as an airbnb or long term.',
      backgroundColor: 'bg-blue-100',
      buttonInfo: { text: 'Add Property', link: '/properties/add', backgroundColor: 'bg-blue-500' },
    },
  ];

  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {infoBoxData.map((infoBox) => (
            <InfoBox
              key={infoBox.id}
              heading={infoBox.heading}
              description={infoBox.description}
              backgroundColor={infoBox.backgroundColor}
              buttonInfo={infoBox.buttonInfo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
