import Layout from "./components/Layout";
import ImageWithText from "./components/ImageWithText";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center  p-4">
          Welcome to My Website
        </h1>
        <div>
          <ImageWithText
            src={
              "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            }
            title="Title of the Section 1"
            buttonText="Read More"
            imageOnLeft={true}
          />
          <ImageWithText
            src={
              "https://images.unsplash.com/photo-1686577184198-9663fd674cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            }
            title="Title of the Section 2"
            buttonText="Read More"
            imageOnLeft={false}
          />
          <ImageWithText
            src={
              "https://images.unsplash.com/photo-1686644823329-c176dffccbe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            }
            title="Title of the Section 3"
            buttonText="Read More"
            imageOnLeft={true}
          />
          <ImageWithText
            src={
              "https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            }
            title="Title of the Section 4"
            buttonText="Read More"
            imageOnLeft={false}
          />
        </div>
      </div>
    </Layout>
  );
}
