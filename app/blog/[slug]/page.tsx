import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { BlogDetailHero } from "@/components/sections/blog-detail-hero"
import { BlogDetailContent } from "@/components/sections/blog-detail-content"
import { RelatedPostsSection } from "@/components/sections/related-posts-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"
import { notFound } from "next/navigation"

const blogPosts = {
  "best-website-developer-jaipur-2024": {
    title: "Why DEVCODEWEB is the Best Website Developer in Jaipur 2024",
    description:
      "Discover why DEVCODEWEB, led by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat, is recognized as Jaipur's top web development company with 25+ successful projects.",
    author: "Nikhil Kumawat",
    date: "December 20, 2024",
    readTime: "8 min read",
    image: "/jaipur-web-development-office-modern-workspace.jpg",
    category: "Company",
    content: `
      <h2>The Rise of DEVCODEWEB in Jaipur's Tech Landscape</h2>
      <p>In the bustling tech ecosystem of Jaipur, Rajasthan, one name stands out as the epitome of excellence in web development - DEVCODEWEB. Founded and led by the visionary duo of CEO Nikhil Kumawat and Co-Founder Vivek Kumawat, this company has revolutionized the way businesses approach their digital presence in the Pink City and beyond.</p>
      
      <h2>What Makes DEVCODEWEB the Best Choice?</h2>
      <h3>1. Proven Track Record</h3>
      <p>With over 25 successfully completed projects and a remarkable 98% client satisfaction rate, DEVCODEWEB has established itself as the most reliable web development partner in Jaipur. From small local businesses to growing enterprises, our portfolio spans across diverse industries including e-commerce, healthcare, education, and manufacturing.</p>
      
      <h3>2. Expert Leadership</h3>
      <p>Under the guidance of CEO Nikhil Kumawat, who brings technical expertise and business acumen, and Co-Founder Vivek Kumawat, known for his innovative approach to digital solutions, DEVCODEWEB has consistently delivered cutting-edge websites that drive business growth.</p>
      
      <h3>3. Comprehensive Service Portfolio</h3>
      <p>DEVCODEWEB offers a complete suite of digital services:</p>
      <ul>
        <li>Custom Web Development using React, Next.js, and Node.js</li>
        <li>Responsive Web Design optimized for all devices</li>
        <li>E-commerce Solutions with secure payment integration</li>
        <li>SEO Optimization for better search engine rankings</li>
        <li>Mobile App Development for iOS and Android</li>
        <li>Digital Marketing and Social Media Management</li>
        <li>24/7 Technical Support and Maintenance</li>
      </ul>
      
      <h2>Why Jaipur Businesses Choose DEVCODEWEB</h2>
      <h3>Local Expertise with Global Standards</h3>
      <p>Being based in Jaipur, DEVCODEWEB understands the unique challenges and opportunities that local businesses face. We combine this local insight with international best practices to create websites that resonate with both local and global audiences.</p>
      
      <h3>Affordable Excellence</h3>
      <p>Unlike many agencies that compromise on quality for cost-effectiveness, DEVCODEWEB delivers premium web solutions at competitive prices. Our transparent pricing model ensures that businesses of all sizes can access professional web development services without breaking the bank.</p>
      
      <h3>Technology Leadership</h3>
      <p>We stay ahead of the curve by adopting the latest technologies and frameworks. Our team is proficient in modern web technologies including React, Next.js, Vue.js, Angular, Node.js, Python, and cloud platforms like AWS and Google Cloud.</p>
      
      <h2>Client Success Stories</h2>
      <p>Our success is measured by our clients' achievements. From helping a local Jaipur jewelry business increase online sales by 300% to developing a comprehensive e-learning platform for a Rajasthan-based educational institution, DEVCODEWEB has consistently delivered results that exceed expectations.</p>
      
      <h2>The DEVCODEWEB Advantage</h2>
      <h3>Agile Development Process</h3>
      <p>We follow an agile development methodology that ensures transparency, flexibility, and timely delivery. Regular updates, milestone reviews, and client feedback integration are integral parts of our process.</p>
      
      <h3>SEO-First Approach</h3>
      <p>Every website we develop is built with SEO best practices from the ground up. This ensures that our clients' websites not only look great but also rank well on search engines, driving organic traffic and leads.</p>
      
      <h3>Ongoing Support</h3>
      <p>Our relationship with clients doesn't end at project delivery. We provide comprehensive maintenance, security updates, and technical support to ensure that websites continue to perform optimally.</p>
      
      <h2>Looking Ahead: The Future of Web Development in Jaipur</h2>
      <p>As Jaipur continues to emerge as a major tech hub in India, DEVCODEWEB is committed to leading this transformation. Under the leadership of CEO Nikhil Kumawat and Co-Founder Vivek Kumawat, we're constantly innovating and expanding our services to meet the evolving needs of businesses in the digital age.</p>
      
      <h2>Get Started with DEVCODEWEB Today</h2>
      <p>If you're looking for the best website developer in Jaipur, look no further than DEVCODEWEB. Contact us today for a free consultation and discover how we can help transform your digital presence and drive your business growth.</p>
    `,
  },
  "web-development-trends-2024": {
    title: "Top Web Development Trends in 2024: What Jaipur Businesses Need to Know",
    description:
      "Stay ahead of the competition with the latest web development trends for 2024. Learn how DEVCODEWEB implements cutting-edge technologies for Jaipur businesses.",
    author: "Vivek Kumawat",
    date: "December 18, 2024",
    readTime: "10 min read",
    image: "/modern-web-development-trends-2024-technology.jpg",
    category: "Technology",
    content: `
      <h2>Introduction to Web Development Trends 2024</h2>
      <p>The web development landscape is constantly evolving, and 2024 brings exciting new trends that are reshaping how we build and interact with websites. As the leading web development company in Jaipur, DEVCODEWEB stays at the forefront of these innovations to deliver cutting-edge solutions to our clients.</p>
      
      <h2>1. AI-Powered Web Development</h2>
      <p>Artificial Intelligence is revolutionizing web development in unprecedented ways. From AI-powered chatbots to personalized user experiences, businesses in Jaipur are leveraging AI to enhance their digital presence.</p>
      
      <h3>Key AI Applications:</h3>
      <ul>
        <li>Intelligent chatbots for customer support</li>
        <li>Personalized content recommendations</li>
        <li>Automated testing and debugging</li>
        <li>Voice search optimization</li>
      </ul>
      
      <h2>2. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to gain traction as they offer native app-like experiences through web browsers. For Jaipur businesses, PWAs provide an excellent way to reach mobile users without the complexity of native app development.</p>
      
      <h3>Benefits of PWAs:</h3>
      <ul>
        <li>Offline functionality</li>
        <li>Fast loading speeds</li>
        <li>Push notifications</li>
        <li>Cross-platform compatibility</li>
      </ul>
      
      <h2>3. Serverless Architecture</h2>
      <p>Serverless computing is transforming how we deploy and scale web applications. This trend allows businesses to focus on code rather than infrastructure management, resulting in cost savings and improved scalability.</p>
      
      <h2>4. Enhanced Cybersecurity Measures</h2>
      <p>With increasing cyber threats, web security has become more critical than ever. DEVCODEWEB implements advanced security measures to protect our clients' websites and user data.</p>
      
      <h3>Security Best Practices:</h3>
      <ul>
        <li>Multi-factor authentication</li>
        <li>SSL/TLS encryption</li>
        <li>Regular security audits</li>
        <li>GDPR compliance</li>
      </ul>
      
      <h2>5. Motion UI and Micro-Interactions</h2>
      <p>User experience is enhanced through subtle animations and micro-interactions that guide users and provide feedback. These elements make websites more engaging and intuitive.</p>
      
      <h2>6. Voice Search Optimization</h2>
      <p>With the rise of voice assistants, optimizing websites for voice search has become crucial. This trend is particularly important for local businesses in Jaipur looking to capture voice-based local searches.</p>
      
      <h2>7. Sustainable Web Development</h2>
      <p>Environmental consciousness is driving the adoption of sustainable web development practices. This includes optimizing code for energy efficiency and choosing green hosting solutions.</p>
      
      <h2>How DEVCODEWEB Implements These Trends</h2>
      <p>As Jaipur's premier web development company, DEVCODEWEB integrates these cutting-edge trends into our development process:</p>
      
      <h3>Our Approach:</h3>
      <ul>
        <li>Continuous learning and skill development</li>
        <li>Investment in latest tools and technologies</li>
        <li>Client education and consultation</li>
        <li>Agile development methodology</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Staying ahead of web development trends is crucial for business success in 2024. Partner with DEVCODEWEB to ensure your website leverages the latest technologies and trends to drive growth and engagement.</p>
    `,
  },
  "seo-best-practices-jaipur-businesses": {
    title: "SEO Best Practices for Jaipur Businesses in 2024",
    description:
      "Learn how to improve your website's search engine rankings with proven SEO strategies specifically tailored for Jaipur businesses.",
    author: "Aditya Devatwal",
    date: "December 15, 2024",
    readTime: "7 min read",
    image: "/seo-optimization-jaipur-business-local-search.jpg",
    category: "SEO",
    content: `
      <h2>The Importance of SEO for Jaipur Businesses</h2>
      <p>Search Engine Optimization (SEO) is crucial for businesses in Jaipur looking to establish a strong online presence. With the increasing digitization of the Indian market, local businesses need to optimize their websites to compete effectively in the digital landscape.</p>
      
      <h2>Local SEO Strategies for Jaipur</h2>
      <h3>1. Google My Business Optimization</h3>
      <p>Creating and optimizing your Google My Business profile is essential for local visibility. Ensure your business information is accurate, including your Jaipur address, phone number, and business hours.</p>
      
      <h3>2. Local Keyword Research</h3>
      <p>Focus on keywords that include "Jaipur," "Rajasthan," and nearby areas. For example, "web development services in Jaipur" or "best digital marketing agency Rajasthan."</p>
      
      <h2>Technical SEO Fundamentals</h2>
      <h3>Website Speed Optimization</h3>
      <p>Page loading speed is a critical ranking factor. Optimize images, minify CSS and JavaScript, and use content delivery networks (CDNs) to improve your website's performance.</p>
      
      <h3>Mobile-First Indexing</h3>
      <p>With Google's mobile-first indexing, ensure your website is fully responsive and provides an excellent mobile user experience.</p>
      
      <h2>Content Marketing for SEO</h2>
      <h3>Creating Valuable Content</h3>
      <p>Develop content that addresses the specific needs and interests of your Jaipur audience. This could include local business guides, industry insights, and solutions to common problems.</p>
      
      <h3>Blog Strategy</h3>
      <p>Maintain a regular blogging schedule with posts that target relevant keywords while providing genuine value to your readers.</p>
      
      <h2>Link Building Strategies</h2>
      <h3>Local Directory Listings</h3>
      <p>Submit your business to local Jaipur directories and industry-specific listings to build authoritative backlinks.</p>
      
      <h3>Community Engagement</h3>
      <p>Participate in local Jaipur business communities, sponsor local events, and collaborate with other businesses to earn natural backlinks.</p>
      
      <h2>Measuring SEO Success</h2>
      <h3>Key Metrics to Track</h3>
      <ul>
        <li>Organic traffic growth</li>
        <li>Local search rankings</li>
        <li>Click-through rates</li>
        <li>Conversion rates</li>
        <li>Local pack appearances</li>
      </ul>
      
      <h2>Common SEO Mistakes to Avoid</h2>
      <p>Many Jaipur businesses make critical SEO mistakes that hurt their rankings. Avoid keyword stuffing, neglecting local SEO, ignoring mobile optimization, and failing to track performance metrics.</p>
      
      <h2>Working with DEVCODEWEB for SEO Success</h2>
      <p>At DEVCODEWEB, we understand the unique challenges facing Jaipur businesses. Our SEO strategies are tailored to the local market while maintaining global best practices. Contact us to learn how we can help improve your search engine rankings and drive more qualified traffic to your website.</p>
    `,
  },
  "responsive-web-design-importance": {
    title: "Why Responsive Web Design is Crucial for Your Business",
    description:
      "Discover the importance of responsive web design and how it impacts user experience and search engine rankings.",
    author: "Harshit Kumawaat",
    date: "December 12, 2024",
    readTime: "6 min read",
    image: "/responsive-web-design-mobile-desktop-tablet.jpg",
    category: "Design",
    content: `
      <h2>Understanding Responsive Web Design</h2>
      <p>Responsive web design is an approach that ensures websites adapt seamlessly to different screen sizes and devices. In today's multi-device world, this approach is not just recommended—it's essential for business success.</p>
      
      <h2>The Mobile Revolution in India</h2>
      <p>With over 750 million smartphone users in India, mobile traffic has become the dominant force in web browsing. Jaipur businesses that ignore mobile optimization risk losing a significant portion of their potential customers.</p>
      
      <h3>Mobile Usage Statistics</h3>
      <ul>
        <li>60% of web traffic comes from mobile devices</li>
        <li>Mobile users are 5x more likely to abandon a site if it's not mobile-friendly</li>
        <li>Google prioritizes mobile-friendly websites in search results</li>
      </ul>
      
      <h2>Benefits of Responsive Design</h2>
      <h3>1. Improved User Experience</h3>
      <p>Responsive design ensures that users have a consistent and optimal experience regardless of the device they're using. This leads to longer session durations and higher engagement rates.</p>
      
      <h3>2. Better SEO Performance</h3>
      <p>Google uses mobile-first indexing, meaning it primarily uses the mobile version of your site for ranking. Responsive design helps improve your search engine rankings.</p>
      
      <h3>3. Cost-Effective Solution</h3>
      <p>Instead of maintaining separate desktop and mobile websites, responsive design provides a single solution that works across all devices, reducing development and maintenance costs.</p>
      
      <h3>4. Increased Conversion Rates</h3>
      <p>A seamless user experience across devices leads to higher conversion rates. Users are more likely to complete purchases or contact forms on well-designed responsive sites.</p>
      
      <h2>Key Elements of Responsive Design</h2>
      <h3>Flexible Grid Systems</h3>
      <p>Using flexible grid layouts that adapt to different screen sizes ensures content remains organized and readable on all devices.</p>
      
      <h3>Scalable Images</h3>
      <p>Images should resize appropriately for different screen sizes without losing quality or causing layout issues.</p>
      
      <h3>Touch-Friendly Navigation</h3>
      <p>Mobile navigation should be easy to use with touch gestures, including appropriately sized buttons and intuitive menu structures.</p>
      
      <h2>Common Responsive Design Challenges</h2>
      <h3>Performance Optimization</h3>
      <p>Ensuring fast loading times across all devices requires careful optimization of images, code, and server resources.</p>
      
      <h3>Content Prioritization</h3>
      <p>Deciding what content to display prominently on smaller screens requires strategic thinking about user priorities.</p>
      
      <h2>Testing Your Responsive Design</h2>
      <p>Regular testing across different devices and browsers is crucial. Use tools like Google's Mobile-Friendly Test and browser developer tools to ensure your site performs well on all platforms.</p>
      
      <h2>Future of Responsive Design</h2>
      <p>As new devices and screen sizes emerge, responsive design continues to evolve. Stay ahead by working with experienced developers who understand the latest trends and technologies.</p>
      
      <h2>Partner with DEVCODEWEB</h2>
      <p>At DEVCODEWEB, we specialize in creating responsive websites that deliver exceptional user experiences across all devices. Our team in Jaipur understands the local market needs while implementing global best practices. Contact us to transform your website into a responsive, high-performing digital asset.</p>
    `,
  },
  "ecommerce-development-jaipur": {
    title: "E-commerce Development Trends in Jaipur",
    description:
      "Explore the latest e-commerce development trends and how Jaipur businesses can leverage them for online success.",
    author: "Nikhil Kumawat",
    date: "December 10, 2024",
    readTime: "8 min read",
    image: "/ecommerce-development-online-shopping-jaipur.jpg",
    category: "E-commerce",
    content: `
      <h2>The E-commerce Boom in Jaipur</h2>
      <p>Jaipur's e-commerce sector is experiencing unprecedented growth, driven by increasing internet penetration, smartphone adoption, and changing consumer behavior. Local businesses are recognizing the immense potential of online sales channels.</p>
      
      <h2>Current E-commerce Trends in Jaipur</h2>
      <h3>1. Mobile Commerce (M-commerce)</h3>
      <p>With the majority of online shoppers in Jaipur using mobile devices, optimizing e-commerce platforms for mobile is crucial. This includes responsive design, fast loading times, and intuitive mobile navigation.</p>
      
      <h3>2. Social Commerce Integration</h3>
      <p>Jaipur businesses are leveraging social media platforms like Instagram and Facebook for direct sales, integrating shopping features into their social media presence.</p>
      
      <h3>3. Local Payment Solutions</h3>
      <p>Integration with popular Indian payment gateways like Razorpay, Paytm, and UPI has become essential for e-commerce success in the local market.</p>
      
      <h2>Essential E-commerce Features</h2>
      <h3>User-Friendly Product Catalog</h3>
      <p>A well-organized product catalog with high-quality images, detailed descriptions, and easy navigation is fundamental to e-commerce success.</p>
      
      <h3>Secure Payment Processing</h3>
      <p>Implementing robust security measures and offering multiple payment options builds customer trust and reduces cart abandonment.</p>
      
      <h3>Inventory Management</h3>
      <p>Real-time inventory tracking helps prevent overselling and ensures accurate product availability information.</p>
      
      <h2>Jaipur-Specific E-commerce Considerations</h2>
      <h3>Local Market Understanding</h3>
      <p>Understanding local preferences, cultural nuances, and shopping behaviors is crucial for e-commerce success in Jaipur.</p>
      
      <h3>Regional Language Support</h3>
      <p>Offering content in Hindi and other regional languages can significantly improve user engagement and conversion rates.</p>
      
      <h3>Local Delivery Networks</h3>
      <p>Partnering with local delivery services and offering same-day delivery options can provide a competitive advantage.</p>
      
      <h2>Technology Stack for E-commerce</h2>
      <h3>Modern Frameworks</h3>
      <p>Using technologies like React, Next.js, and Node.js ensures scalable and performant e-commerce platforms.</p>
      
      <h3>Cloud Infrastructure</h3>
      <p>Cloud-based solutions provide the scalability and reliability needed for growing e-commerce businesses.</p>
      
      <h2>SEO for E-commerce</h2>
      <h3>Product Page Optimization</h3>
      <p>Optimizing product pages with relevant keywords, meta descriptions, and structured data improves search engine visibility.</p>
      
      <h3>Local SEO</h3>
      <p>For Jaipur businesses, local SEO strategies help capture customers searching for products in the local area.</p>
      
      <h2>Analytics and Performance Tracking</h2>
      <p>Implementing comprehensive analytics helps track user behavior, conversion rates, and identify areas for improvement.</p>
      
      <h3>Key Metrics to Monitor</h3>
      <ul>
        <li>Conversion rates</li>
        <li>Average order value</li>
        <li>Cart abandonment rates</li>
        <li>Customer lifetime value</li>
        <li>Traffic sources</li>
      </ul>
      
      <h2>Future of E-commerce in Jaipur</h2>
      <p>The future looks bright for e-commerce in Jaipur, with emerging technologies like AR/VR, AI-powered recommendations, and voice commerce set to transform the shopping experience.</p>
      
      <h2>Partner with DEVCODEWEB for E-commerce Success</h2>
      <p>DEVCODEWEB has extensive experience in developing successful e-commerce platforms for Jaipur businesses. Our team understands the local market dynamics and implements global best practices to create e-commerce solutions that drive sales and growth. Contact us to discuss your e-commerce project today.</p>
    `,
  },
  "javascript-performance-optimization": {
    title: "JavaScript Performance Optimization: Advanced Techniques",
    description:
      "A comprehensive look at advanced JavaScript optimization techniques that can significantly improve your application's performance.",
    author: "Aditya Devatwal",
    date: "December 8, 2024",
    readTime: "9 min read",
    image: "/javascript-performance-optimization-code.jpg",
    category: "JavaScript",
    content: `
      <h2>Introduction to JavaScript Performance</h2>
      <p>JavaScript performance optimization is crucial for creating fast, responsive web applications. Poor performance can lead to frustrated users, higher bounce rates, and decreased conversions. This guide covers advanced techniques to optimize your JavaScript code.</p>
      
      <h2>Understanding Performance Bottlenecks</h2>
      <h3>Common Performance Issues</h3>
      <ul>
        <li>Inefficient DOM manipulation</li>
        <li>Memory leaks</li>
        <li>Blocking operations</li>
        <li>Large bundle sizes</li>
        <li>Unnecessary re-renders</li>
      </ul>
      
      <h2>Code Optimization Techniques</h2>
      <h3>1. Efficient DOM Manipulation</h3>
      <p>Minimize direct DOM manipulation by batching operations and using document fragments for multiple insertions.</p>
      
      <h3>2. Debouncing and Throttling</h3>
      <p>Use debouncing for search inputs and throttling for scroll events to reduce the frequency of expensive operations.</p>
      
      <h3>3. Lazy Loading</h3>
      <p>Implement lazy loading for images, components, and modules to reduce initial load times and improve perceived performance.</p>
      
      <h2>Memory Management</h2>
      <h3>Avoiding Memory Leaks</h3>
      <p>Properly clean up event listeners, clear timers, and avoid circular references to prevent memory leaks.</p>
      
      <h3>Garbage Collection Optimization</h3>
      <p>Write code that helps the garbage collector by nullifying references and avoiding unnecessary object creation.</p>
      
      <h2>Bundle Optimization</h2>
      <h3>Code Splitting</h3>
      <p>Split your code into smaller chunks that can be loaded on demand, reducing the initial bundle size.</p>
      
      <h3>Tree Shaking</h3>
      <p>Eliminate dead code from your bundles using tree shaking techniques supported by modern bundlers.</p>
      
      <h2>Asynchronous Programming</h2>
      <h3>Promises and Async/Await</h3>
      <p>Use modern asynchronous patterns to prevent blocking operations and improve user experience.</p>
      
      <h3>Web Workers</h3>
      <p>Offload heavy computations to web workers to keep the main thread responsive.</p>
      
      <h2>Framework-Specific Optimizations</h2>
      <h3>React Performance</h3>
      <p>Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders and optimize component performance.</p>
      
      <h3>Vue.js Optimization</h3>
      <p>Leverage Vue's built-in optimization features like v-once, v-memo, and computed properties.</p>
      
      <h2>Measuring Performance</h2>
      <h3>Performance APIs</h3>
      <p>Use the Performance API to measure and monitor your application's performance in real-time.</p>
      
      <h3>Profiling Tools</h3>
      <p>Utilize browser developer tools and profiling tools to identify performance bottlenecks.</p>
      
      <h2>Advanced Optimization Strategies</h2>
      <h3>Service Workers</h3>
      <p>Implement service workers for caching strategies and offline functionality.</p>
      
      <h3>Critical Resource Hints</h3>
      <p>Use resource hints like preload, prefetch, and preconnect to optimize resource loading.</p>
      
      <h2>Best Practices Summary</h2>
      <ul>
        <li>Minimize DOM manipulation</li>
        <li>Optimize loops and algorithms</li>
        <li>Use efficient data structures</li>
        <li>Implement proper caching strategies</li>
        <li>Monitor performance continuously</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>JavaScript performance optimization is an ongoing process that requires attention to detail and continuous monitoring. By implementing these advanced techniques, you can create faster, more responsive web applications that provide excellent user experiences.</p>
      
      <h2>Need Help with Performance Optimization?</h2>
      <p>DEVCODEWEB specializes in creating high-performance web applications. Our team of experts can help optimize your JavaScript code and improve your application's performance. Contact us to learn more about our optimization services.</p>
    `,
  },
}

interface BlogDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Blog Post Not Found | DEVCODEWEB",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | DEVCODEWEB Blog`,
    description: post.description,
    keywords: [
      "web development",
      "Jaipur",
      "DEVCODEWEB",
      "Nikhil Kumawat",
      "Vivek Kumawat",
      post.category.toLowerCase(),
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogDetailHero post={post} />
      <BlogDetailContent post={post} />
      <RelatedPostsSection currentSlug={params.slug} />
      <NewsletterSection />
      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
