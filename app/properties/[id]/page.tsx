interface PropertyPageProps {
  params: { id: string };
}

const PropertyPage: React.FC<PropertyPageProps> = ({ params }) => {
  return <div>Property Page {params.id}</div>;
};

export default PropertyPage;
