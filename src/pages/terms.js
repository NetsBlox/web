import React from "react";
import { Link } from "react-router-dom"; 
import { Page } from "../components.js";

export default () => (
  <Page>
    <section class="mb-16">
        <h1 class="text-4xl font-bold text-gray-800 border-b-4 border-blue-500 pb-3 mb-6">NetsBlox Terms of Service</h1>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-5 mb-8 rounded-r-lg">
            <p class="mb-4">These Terms of Service ("Terms") govern your use of NetsBlox, an educational programming environment provided by Vanderbilt University with support from the National Science Foundation.</p>
            <p class="mb-4">NetsBlox is a visual programming language designed primarily for learners ages 12–20, though users of all ages are welcome. NetsBlox builds on the ideas of earlier block-based languages such as Snap! and Scratch, but it is a distinct project maintained by Vanderbilt University.</p>
            <p class="font-semibold">By using NetsBlox, you agree to these Terms. Please read them carefully.</p>
        </div>

        <div class="space-y-8">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">1. Use of the Software</h2>
                <div class="space-y-3 text-gray-700">
                    <p>NetsBlox is open-source software, available free of charge under the GNU Affero General Public License (AGPL). This license allows you to use NetsBlox for any purpose, but requires that any modified versions you distribute are also licensed under the AGPL and include access to source code.</p>
                    <p>To download the NetsBlox source code, click the NetsBlox icon in the upper left corner of the programming page and select "Download source."</p>
                    <p>You do not need an account or any personal information to use NetsBlox. (See our <Link to="/privacy"> Privacy Policy </Link> for details.)</p>
                    <p>You may not attempt to disrupt or interfere with the use of NetsBlox by others, including through denial-of-service attacks, unauthorized access, or any other malicious activity.</p>
                </div>

                <h2 class="text-xl font-semibold text-gray-800 mb-4">2. Private Use of Cloud Storage</h2>
                <div class="space-y-3 text-gray-700">
                    <p>If you create an account, you may store your NetsBlox projects on our cloud server. Projects can be kept private or shared publicly with the community.</p>
                    <p>Storage limits may be applied at our discretion.</p>
                    <p>The server is intended only for materials directly related to NetsBlox programming projects. Uploading unrelated media (e.g., large personal music or video collections) is not allowed.</p>
                </div>

                <h2 class="text-xl font-semibold text-gray-800 mb-4">3. Public Sharing of Projects</h2>
                <p class="text-gray-700 mb-4">When you choose to share a project publicly, the following rules apply:</p>
                
                <div class="space-y-4 ml-4">
                    <div>
                        <h3 class="font-semibold text-gray-800 mb-2">License:</h3>
                        <p class="text-gray-700">Public projects (including media such as images and sounds) are shared under the Creative Commons Attribution-NonCommercial-ShareAlike (CC BY-NC-SA) license.</p>
                        <p class="text-sm text-gray-600 mt-2 italic">Note: If you wish your project to qualify as "free software," you may waive the NonCommercial restriction. This choice is up to you.</p>
                    </div>
                    
                    <div>
                        <h3 class="font-semibold text-gray-800 mb-2">Attribution:</h3>
                        <p class="text-gray-700">If you build on someone else's work, you should credit them in your project notes.</p>
                    </div>
                    
                    <div>
                        <h3 class="font-semibold text-gray-800 mb-2">Community Standards:</h3>
                        <p class="text-gray-700">Our community includes people of all ages, backgrounds, and beliefs. Do not share content that could reasonably be considered offensive, harmful, or discriminatory. Vanderbilt University reserves the right to remove shared projects that, in our judgment, violate these standards. Repeated violations may result in account removal.</p>
                    </div>
                    
                    <div>
                        <h3 class="font-semibold text-gray-800 mb-2">Legality:</h3>
                        <p class="text-gray-700">You may not share anything that is illegal under U.S. law, including but not limited to pornography, hate speech, or copyrighted material without permission.</p>
                    </div>
                    
                    <div>
                        <h3 class="font-semibold text-gray-800 mb-2">Respect for Others:</h3>
                        <p class="text-gray-700">Do not insult, bully, or harass other users. Treat others as you would like to be treated.</p>
                    </div>
                    
                    <div>
                        <h3 class="font-semibold text-gray-800 mb-2">Privacy:</h3>
                        <p class="text-gray-700">Do not post personally identifiable information (such as your full name, address, or date of birth) in projects.</p>
                    </div>
                </div>
                
                <p class="text-gray-700 mt-4">If you believe a project violates copyright law, please contact us at <span class="font-semibold text-blue-600">akos.ledeczi@vanderbilt.edu</span> in accordance with the Digital Millennium Copyright Act (DMCA).</p>

                <h2 class="text-xl font-semibold text-gray-800 mb-4">4. No Liability and Disclaimer of Warranties</h2>
                <p class="text-gray-700 mb-4">By using NetsBlox, you acknowledge and agree that:</p>
                <div class="space-y-3 text-gray-700 ml-4">
                    <p>NetsBlox is provided "as is" without warranties of any kind, including but not limited to reliability, availability, or suitability for a particular purpose.</p>
                    <p>Vanderbilt University is not responsible for any damage to your computer, device, or data. NetsBlox runs entirely in your browser using JavaScript, which is designed with built-in security restrictions. While we do not believe NetsBlox poses significant risk, we cannot guarantee complete security.</p>
                    <p>Vanderbilt University is not responsible for any charges you may incur from your internet or mobile provider (for example, if you exceed your data plan while programming on a cellular network).</p>
                </div>

                <h2 class="text-xl font-semibold text-gray-800 mb-4">5. Termination of Accounts</h2>
                <p class="text-gray-700">We reserve the right to suspend or terminate accounts that violate these Terms, community standards, or applicable law. In most cases, users will receive a warning before account removal, but serious violations may result in immediate suspension.</p>

                <h2 class="text-xl font-semibold text-gray-800 mb-4">6. Governing Law</h2>
                <p class="text-gray-700">These Terms are governed by the laws of the United States and the State of Tennessee, without regard to conflict of law principles.</p>

                <h2 class="text-xl font-semibold text-gray-800 mb-4">7. Contact Information</h2>
                <p class="text-gray-700">If you have questions, concerns, or need to report a violation, please contact us at:</p>
                <p class="font-semibold text-blue-600 mt-2">akos.ledeczi@vanderbilt.edu</p>
        </div>

        <div class="bg-blue-100 border border-blue-300 rounded-lg p-6 mt-8">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Summary</h3>
            <ul class="space-y-1 text-gray-700">
                <li>• NetsBlox is open-source software (AGPL).</li>
                <li>• Publicly shared projects are licensed under CC BY-NC-SA.</li>
                <li>• Respect community standards, the law, and others.</li>
                <li>• Vanderbilt University provides NetsBlox "as is" without warranties.</li>
                <li>• Accounts may be terminated for violations.</li>
            </ul>
        </div>
    </section>

    <section>
        <h1 class="text-4xl font-bold text-gray-800 border-b-4 border-blue-500 pb-3 mb-8">NetsBlox FAQ: Community Guidelines & Common Questions</h1>
        
        <div class="space-y-8">
            <div class="border-l-4 border-blue-400 pl-6">
                <h2 class="text-lg font-semibold text-gray-800 mb-3">What is NetsBlox?</h2>
                <p class="text-gray-700">NetsBlox is a free, open-source programming environment created at Vanderbilt University with support from the National Science Foundation. It's designed to help students learn programming and computational thinking in a fun, collaborative way.</p>
            </div>

            <div class="border-l-4 border-blue-400 pl-6">
                <h2 class="text-lg font-semibold text-gray-800 mb-3">Do I need an account to use NetsBlox?</h2>
                <div class="space-y-2 text-gray-700">
                    <p><strong>No!</strong> Anyone can use NetsBlox in their browser without creating an account or giving us personal information.</p>
                    <p>If you want to save your projects online (so you can open them later from another device), you can create an account.</p>
                </div>
            </div>

            <div class="border-l-4 border-blue-400 pl-6">
                <h2 class="text-lg font-semibold text-gray-800 mb-3">Is NetsBlox really free?</h2>
                <p class="text-gray-700">Yes. NetsBlox is open-source software, which means it is free to use, free to share, and you can even look at or modify the code.</p>
            </div>

            <div class="border-l-4 border-blue-400 pl-6">
                <h2 class="text-lg font-semibold text-gray-800 mb-3">Who owns my projects?</h2>
                <div class="space-y-2 text-gray-700">
                    <p>If you save projects privately, they belong to you.</p>
                    <p>If you share projects publicly, others can view them and remix them (make their own versions).</p>
                    <p>Public projects are licensed under Creative Commons BY-NC-SA — meaning people can share and adapt your work, as long as they give you credit, don't use it commercially, and share alike.</p>
                    <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-3">
                        <p class="font-medium text-blue-800">💡 Tip: Always give credit if you remix someone else's work!</p>
                    </div>
                </div>
            </div>

            <div class="border-l-4 border-blue-400 pl-6">
                <h2 class="text-lg font-semibold text-gray-800 mb-3">What kind of projects can I share?</h2>
                <p class="text-gray-700 mb-3">You can share any project that:</p>
                <ul class="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Is appropriate for a diverse, global community (kids, teens, adults).</li>
                    <li>Does not include offensive language, hate speech, pornography, or illegal content.</li>
                    <li>Does not reveal personal details (like your full name, address, or birthday).</li>
                    <li>Respects copyright (only use media you created or that is free to share).</li>
                </ul>
                <p class="text-gray-700 mt-3">If we find projects that don't follow these rules, we may take them down.</p>
            </div>

            <div class="border-l-4 border-blue-400 pl-6">
                <h2 class="text-lg font-semibold text-gray-800 mb-3">How safe is NetsBlox?</h2>
                <div class="space-y-2 text-gray-700">
                    <p>NetsBlox runs in your web browser using JavaScript, just like most modern websites.</p>
                    <p>We don't think it poses significant risk to your device or data.</p>
                    <p>Still, we cannot guarantee complete security, and Vanderbilt University does not take responsibility for any problems that occur.</p>
                    <p>If you're on a phone or tablet with a data plan, be mindful of your usage — programming can use bandwidth.</p>
                </div>
            </div>

            <div class="border-l-4 border-blue-400 pl-6">
                <h2 class="text-lg font-semibold text-gray-800 mb-3">What happens if someone breaks the rules?</h2>
                <div class="space-y-2 text-gray-700">
                    <p>In most cases, we'll remove the inappropriate project and warn the user.</p>
                    <p>Repeated or serious violations may result in an account being suspended or closed.</p>
                </div>
            </div>

            <div class="border-l-4 border-blue-400 pl-6">
                <h2 class="text-lg font-semibold text-gray-800 mb-3">Why does NetsBlox talk about Snap! and Scratch?</h2>
                <p class="text-gray-700">NetsBlox builds on ideas from earlier block-based languages like Snap! and Scratch. We are grateful to those communities, but NetsBlox is a separate project with its own rules, servers, and community.</p>
            </div>

            <div class="border-l-4 border-blue-400 pl-6">
                <h2 class="text-lg font-semibold text-gray-800 mb-3">How do I report a problem?</h2>
                <p class="text-gray-700">If you see a project that breaks the rules (e.g., offensive or copyrighted material), or if you have other concerns, please contact us at:</p>
                <p class="font-semibold text-blue-600 mt-2">akos.ledeczi@vanderbilt.edu</p>
            </div>
        </div>

        <div class="bg-blue-100 border border-blue-300 rounded-lg p-6 mt-8">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Quick Reminders</h3>
            <ul class="space-y-1 text-gray-700">
                <li>• NetsBlox is free and open-source.</li>
                <li>• You don't need an account unless you want cloud storage.</li>
                <li>• Be respectful and give credit.</li>
                <li>• Don't post offensive or personal content.</li>
                <li>• Vanderbilt University provides NetsBlox "as is."</li>
            </ul>
        </div>
    </section>
 </Page>
);
