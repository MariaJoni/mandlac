import React from 'react'
import { FaSearch } from 'react-icons/fa'

function PrivacyPolicy() {
  return (
    <div>
      <div className="w-full mt-20 font-roboto">
        <div className="bg-[url('./assets/Blog.png')] w-full h-[250px] md:h-[300px] lg:h-[350px] bg-no-repeat bg-cover relative -z-10">
          <div className="absolute -z-20 top-10 left-5 md:left-20 lg:left-32 md:top-32 lg:top-32 px-3 py-2 text-white bg-[#565857] flex items-center gap-3 font-semibold text-lg md:text-xl">
            <FaSearch className="text-amber-400 h-5 w-5 md:h-6 md:w-6" />
            Privacy Policy
          </div>
          <div className="absolute top-24 left-5 md:top-52 md:left-20 lg:left-32 text-sm md:text-2xl text-white">
            THE MANDLOC PRIVACY POLICY
          </div>
        </div>

        <div className="flex flex-col px-5 lg:px-32">
          <h2 className="text-2xl md:text-3xl font-semibold text-left mt-5 pb-5">
          </h2>
          <div className="text-base md:text-lg leading-relaxed">
            <h1 className="text-xl font-medium mb-6">Who Are We?</h1>
            <p>
              Mandlac is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our mobile application, Mandlac Hub ("the App").
            </p>
            <p className="mb-8">
              By using the App, you consent to the collection and use of your information as outlined in this Privacy Policy. If you do not agree with our privacy practices, please do not use the App.
            </p>
            <h2 className="text-lg font-semibold my-3">1. Information We Collect</h2>
            <p>We collect various types of personal information to provide you with a better user experience and ensure the proper functioning of the App. The information we collect includes:</p>
            <ul className="list-disc ml-6 md:ml-10 my-4">
              <li>
                <span className="font-medium">Personal Information:</span> When you create an account, we collect your name, email address, location (city, State, and Country).
              </li>
              <li>
                <span className="font-medium">Permissions:</span> We request permission for:
                <ul className="list-disc ml-6 md:ml-10">
                  <li>Camera Access: To scan QR codes or take pictures of IoT devices.</li>
                  <li>Storage Access: To upload and store device-related data.</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">IoT Device Data:</span> The App collects data from connected IoT devices, such as water flow readings, smoke detection alerts, and other metrics, to monitor and display the performance of each device.
              </li>
            </ul>
            <h2 className="text-lg font-semibold my-3">2. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc ml-6 md:ml-10 my-4">
              <li>To create and manage your user account.</li>
              <li>To enable the connection and monitoring of your IoT devices.</li>
              <li>To send important updates and notifications related to the App or your connected devices.</li>
              <li>To enhance the functionality of the App and improve user experience.</li>
              <li>To comply with legal obligations, including responding to requests from law enforcement or regulatory authorities.</li>
            </ul>
            <h2 className="text-lg font-semibold my-3">3. Sharing Your Information</h2>
            <ul className="list-disc ml-6 md:ml-10 my-4">
              <li>
                <span className="font-medium">Service Providers:</span> We may share your information with third-party service providers who assist us in operating the App, such as cloud storage providers or analytics services.
              </li>
              <li>
                <span className="font-medium">Legal Requirements:</span> We may disclose your information if required by law, regulation, or legal process, or in response to requests from governmental authorities.
              </li>
              <li>
                <span className="font-medium">Business Transactions:</span> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </li>
            </ul>
            <h2 className="text-lg font-semibold my-3">4. Data Security</h2>
            <p className="mb-4">
              We implement reasonable administrative, technical, and physical safeguards to protect the information we collect. However, please be aware that no data transmission over the internet is completely secure. While we strive to protect your personal data, we cannot guarantee the absolute security of your information.
            </p>
            <h2 className="text-lg font-semibold my-3">5. Your Rights</h2>
            <p className="mb-3">
              Depending on your location and applicable laws, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc ml-6 md:ml-10 my-4">
              <li>Requesting access to and correction of your data.</li>
              <li>Requesting deletion of your personal information.</li>
              <li>Opting out of marketing communications.</li>
            </ul>
            <p className="mb-4">
              If you wish to exercise any of these rights, please contact us using the information provided below.
            </p>
            <h2 className="text-lg font-semibold my-3">6. Children’s Privacy</h2>
            <p className="mb-4">
              Mandlac Hub is not intended for use by children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information.
            </p>
            <h2 className="text-lg font-semibold my-3">7. Third-Party Links</h2>
            <p className="mb-4">
              The App does not include links to third-party websites or services. All features and functionalities are managed exclusively by us, ensuring your data remains secure within our system.
            </p>
            <h2 className="text-lg font-semibold my-3">8. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy within the App or on our website. The date of the most recent update will be indicated at the top of this page.
            </p>
            <h2 className="text-lg font-semibold my-3">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p>
              <strong>Mandlac Hub Support</strong>
              <br />
              Email: store.mandlac@gmail.com
            </p>
            <p className="my-10">
              By using the Mandlac Hub App, you agree to the terms outlined in this Privacy Policy. Thank you for trusting Mandlac Hub with your personal information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
