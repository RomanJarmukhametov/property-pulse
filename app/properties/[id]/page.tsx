import connectDB from '@/config/database';
import Property from '@/models/Property';
import PropertyHeaderImage from '@/components/atoms/PropertyHeaderImage/PropertyHeaderImage';
import BackToProperties from '@/components/atoms/BackToProperties/BackToProperties';
import { PropertyProps } from '@/components/organisms/PropertyCard/PropertyProps';

const PropertyPage = async ({ params }: { params: { id: string } }) => {
  await connectDB();

  const property = (await Property.findById(params.id).lean()) as PropertyProps;

  return (
    <>
      <PropertyHeaderImage image={(property.images && property.images[0]) || ''} />
      <BackToProperties />

      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6" />
          {/* Property Info */}
        </div>
      </section>
    </>
  );
};

export default PropertyPage;
