import PropertyCard from '@/components/organisms/PropertyCard/PropertyCard';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import { PropertyProps } from '@/components/organisms/PropertyCard/PropertyProps';

const PropertiesPage = async () => {
  await connectDB();

  // const properties = await Property.find({}).lean();

  const properties = (await Property.find({}).lean().exec()) as PropertyProps[];

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id.toString()} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
