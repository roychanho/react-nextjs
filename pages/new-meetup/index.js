import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupFrom from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add your own Meetups" />
      </Head>
      <NewMeetupFrom onAddMeetup={addMeetupHandler} />;
    </>
  );
};

export default NewMeetupPage;
