import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen">
        <div className="max-w-4xl mx-auto p-6 bg-base-200 shadow-lg rounded-lg mt-20 mb-10">
          <h2 className="text-3xl font-bold text-center mb-6">
            About This Website
          </h2>
          {/* Question and Answers */}
          <div className="space-y-4">
            {/* Q/A 1 */}
            <div className="collapse collapse-arrow bg-base-100 shadow-md">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                What is the purpose of this website?
              </div>
              <div className="collapse-content">
                <p>
                  This website is designed to provide users with a platform to
                  complete microtasks and earn money efficiently. It connects
                  users with available tasks based on their skills.
                </p>
              </div>
            </div>

            {/* Q/A 2 */}
            <div className="collapse collapse-arrow bg-base-100 shadow-md">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                What features does this website offer?
              </div>
              <div className="collapse-content">
                <p>
                  The platform includes task browsing, task management, earnings
                  tracking, and secure payment processing. Users can filter
                  tasks based on categories and difficulty levels.
                </p>
              </div>
            </div>

            {/* Q/A 3 */}
            <div className="collapse collapse-arrow bg-base-100 shadow-md">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                How do users earn money?
              </div>
              <div className="collapse-content">
                <p>
                  Users complete assigned tasks, and once the task is verified,
                  they receive payments directly to their accounts. Payments can
                  be withdrawn through various payment gateways.
                </p>
              </div>
            </div>

            {/* Q/A 4 */}
            <div className="collapse collapse-arrow bg-base-100 shadow-md">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                How secure is this platform?
              </div>
              <div className="collapse-content">
                <p>
                  The platform ensures security through encrypted transactions,
                  two-factor authentication, and fraud detection measures to
                  protect users and their earnings.
                </p>
              </div>
            </div>

            {/* Q/A 5 */}
            <div className="collapse collapse-arrow bg-base-100 shadow-md">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                How can I get support?
              </div>
              <div className="collapse-content">
                <p>
                  Users can contact customer support via email or live chat for
                  assistance. We also have a help center with FAQs and
                  troubleshooting guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
