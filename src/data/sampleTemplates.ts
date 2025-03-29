export interface SampleTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  prompt: string;
  useCase: string;
}

export const sampleTemplates: SampleTemplate[] = [
  // Product Marketing Templates
  {
    id: '1',
    name: 'New Product Launch',
    category: 'Product Marketing',
    description: 'Announce a new product launch to your customer base',
    prompt: 'Create an SMS campaign to announce our new product {{product}} with {{features}}',
    useCase: 'Product launches, feature announcements'
  },
  {
    id: '2',
    name: 'Product Update',
    category: 'Product Marketing',
    description: 'Inform customers about product updates and improvements',
    prompt: 'Create a WhatsApp campaign announcing updates to {{product}} including {{features}}',
    useCase: 'Product updates, feature announcements'
  },
  {
    id: '3',
    name: 'Product Comparison',
    category: 'Product Marketing',
    description: 'Compare different product variants',
    prompt: 'Create a campaign comparing {{product1}} vs {{product2}} for {{useCase}}',
    useCase: 'Product comparison, decision making'
  },
  {
    id: '4',
    name: 'Product Bundle',
    category: 'Product Marketing',
    description: 'Promote product bundles and packages',
    prompt: 'Create a campaign promoting our {{bundleName}} bundle including {{products}}',
    useCase: 'Bundle promotions, package deals'
  },
  {
    id: '5',
    name: 'Limited Edition',
    category: 'Product Marketing',
    description: 'Announce limited edition products',
    prompt: 'Create an urgent campaign for our limited edition {{product}} with only {{quantity}} available',
    useCase: 'Limited editions, exclusivity'
  },

  // Sales and Promotions Templates
  {
    id: '6',
    name: 'Flash Sale',
    category: 'Promotions',
    description: 'Announce time-limited flash sales',
    prompt: 'Create an urgent SMS campaign for a {{duration}} flash sale with {{discount}}% off',
    useCase: 'Time-sensitive promotions, urgency marketing'
  },
  {
    id: '7',
    name: 'Seasonal Sale',
    category: 'Promotions',
    description: 'Promote seasonal sales and discounts',
    prompt: 'Create a promotional campaign for my {{season}} sale offering {{discount}}% off on all products',
    useCase: 'Seasonal promotions, holiday sales'
  },
  {
    id: '8',
    name: 'BOGO Offer',
    category: 'Promotions',
    description: 'Promote buy-one-get-one offers',
    prompt: 'Create a campaign for our BOGO offer on {{product}} - buy one, get one {{discount}}% off',
    useCase: 'BOGO promotions, bundle deals'
  },
  {
    id: '9',
    name: 'Early Bird Discount',
    category: 'Promotions',
    description: 'Offer early bird discounts for upcoming events/products',
    prompt: 'Create a campaign offering {{discount}}% early bird discount on {{product}} for the first {{number}} customers',
    useCase: 'Early bird offers, pre-sales'
  },
  {
    id: '10',
    name: 'Membership Discount',
    category: 'Promotions',
    description: 'Offer exclusive discounts to members',
    prompt: 'Create a campaign offering {{discount}}% exclusive discount to our members on {{product}}',
    useCase: 'Member benefits, loyalty rewards'
  },

  // Customer Engagement Templates
  {
    id: '11',
    name: 'Customer Feedback',
    category: 'Customer Engagement',
    description: 'Request feedback from recent customers',
    prompt: 'Send a feedback request to customers who made a purchase in the last {{days}} days',
    useCase: 'Customer feedback, product reviews'
  },
  {
    id: '12',
    name: 'Customer Survey',
    category: 'Customer Engagement',
    description: 'Send customer satisfaction surveys',
    prompt: 'Create a campaign inviting customers to complete our {{surveyName}} survey',
    useCase: 'Customer surveys, market research'
  },
  {
    id: '13',
    name: 'Customer Appreciation',
    category: 'Customer Engagement',
    description: 'Show appreciation to loyal customers',
    prompt: 'Create a thank you campaign for our loyal customers with a special {{reward}}',
    useCase: 'Customer appreciation, loyalty'
  },
  {
    id: '14',
    name: 'Customer Milestone',
    category: 'Customer Engagement',
    description: 'Celebrate customer milestones',
    prompt: 'Create a campaign celebrating {{customerName}}\'s {{milestone}} with us',
    useCase: 'Customer milestones, anniversaries'
  },
  {
    id: '15',
    name: 'Customer Support',
    category: 'Customer Engagement',
    description: 'Provide customer support updates',
    prompt: 'Create a campaign updating customers about their support ticket #{{ticketNumber}}',
    useCase: 'Support updates, issue resolution'
  },

  // Inventory Management Templates
  {
    id: '16',
    name: 'Back in Stock',
    category: 'Inventory',
    description: 'Notify customers when out-of-stock items are back',
    prompt: 'Create an SMS campaign to notify customers who were interested in {{product}} that it\'s back in stock',
    useCase: 'Inventory management, product availability'
  },
  {
    id: '17',
    name: 'Low Stock Alert',
    category: 'Inventory',
    description: 'Alert customers about low stock items',
    prompt: 'Create a campaign alerting customers that {{product}} is running low on stock',
    useCase: 'Stock alerts, urgency marketing'
  },
  {
    id: '18',
    name: 'Pre-order Available',
    category: 'Inventory',
    description: 'Announce pre-order availability',
    prompt: 'Create a campaign announcing pre-orders for {{product}} starting {{date}}',
    useCase: 'Pre-orders, product launches'
  },
  {
    id: '19',
    name: 'Stock Clearance',
    category: 'Inventory',
    description: 'Promote stock clearance sales',
    prompt: 'Create a campaign for our stock clearance sale on {{category}} with up to {{discount}}% off',
    useCase: 'Clearance sales, inventory management'
  },
  {
    id: '20',
    name: 'Restock Notification',
    category: 'Inventory',
    description: 'Notify customers about upcoming restocks',
    prompt: 'Create a campaign informing customers that {{product}} will be restocked on {{date}}',
    useCase: 'Restock notifications, inventory updates'
  },

  // Order Management Templates
  {
    id: '21',
    name: 'Order Confirmation',
    category: 'Order Management',
    description: 'Send order confirmation messages',
    prompt: 'Create a campaign confirming order #{{orderNumber}} for {{customerName}}',
    useCase: 'Order confirmations, purchase receipts'
  },
  {
    id: '22',
    name: 'Order Status Update',
    category: 'Order Management',
    description: 'Send order status updates to customers',
    prompt: 'Create a WhatsApp campaign to update customers about their order #{{orderNumber}} status: {{status}}',
    useCase: 'Order tracking, customer communication'
  },
  {
    id: '23',
    name: 'Order Shipped',
    category: 'Order Management',
    description: 'Notify customers when their order has shipped',
    prompt: 'Create a campaign informing customers that their order #{{orderNumber}} has been shipped',
    useCase: 'Shipping notifications, delivery updates'
  },
  {
    id: '24',
    name: 'Order Delivered',
    category: 'Order Management',
    description: 'Confirm order delivery',
    prompt: 'Create a campaign confirming delivery of order #{{orderNumber}} to {{customerName}}',
    useCase: 'Delivery confirmations, post-purchase'
  },
  {
    id: '25',
    name: 'Order Cancellation',
    category: 'Order Management',
    description: 'Handle order cancellation notifications',
    prompt: 'Create a campaign confirming cancellation of order #{{orderNumber}}',
    useCase: 'Order cancellations, customer service'
  },

  // Customer Service Templates
  {
    id: '26',
    name: 'Service Reminder',
    category: 'Customer Service',
    description: 'Send service reminders to customers',
    prompt: 'Create a campaign reminding customers about their upcoming service appointment on {{date}}',
    useCase: 'Service reminders, appointments'
  },
  {
    id: '27',
    name: 'Service Completion',
    category: 'Customer Service',
    description: 'Confirm service completion',
    prompt: 'Create a campaign confirming completion of service for {{customerName}}',
    useCase: 'Service completion, follow-up'
  },
  {
    id: '28',
    name: 'Service Feedback',
    category: 'Customer Service',
    description: 'Request feedback after service',
    prompt: 'Create a campaign requesting feedback for service #{{serviceNumber}}',
    useCase: 'Service feedback, quality assurance'
  },
  {
    id: '29',
    name: 'Service Update',
    category: 'Customer Service',
    description: 'Provide service status updates',
    prompt: 'Create a campaign updating customers about their service request #{{requestNumber}}',
    useCase: 'Service updates, status tracking'
  },
  {
    id: '30',
    name: 'Service Rescheduling',
    category: 'Customer Service',
    description: 'Handle service rescheduling',
    prompt: 'Create a campaign confirming rescheduling of service appointment to {{newDate}}',
    useCase: 'Appointment rescheduling, service management'
  },

  // Loyalty Program Templates
  {
    id: '31',
    name: 'Points Earned',
    category: 'Loyalty Program',
    description: 'Notify customers about earned points',
    prompt: 'Create a campaign informing customers they earned {{points}} points for their recent purchase',
    useCase: 'Points notifications, rewards tracking'
  },
  {
    id: '32',
    name: 'Points Balance',
    category: 'Loyalty Program',
    description: 'Share points balance updates',
    prompt: 'Create a campaign showing customers their current points balance: {{points}}',
    useCase: 'Balance updates, points tracking'
  },
  {
    id: '33',
    name: 'Points Expiry',
    category: 'Loyalty Program',
    description: 'Alert customers about expiring points',
    prompt: 'Create a campaign alerting customers that {{points}} points will expire on {{date}}',
    useCase: 'Points expiry, urgency marketing'
  },
  {
    id: '34',
    name: 'Tier Upgrade',
    category: 'Loyalty Program',
    description: 'Announce loyalty tier upgrades',
    prompt: 'Create a campaign congratulating customers on reaching {{tier}} tier status',
    useCase: 'Tier upgrades, loyalty milestones'
  },
  {
    id: '35',
    name: 'Rewards Available',
    category: 'Loyalty Program',
    description: 'Notify about available rewards',
    prompt: 'Create a campaign informing customers they have {{points}} points available for rewards',
    useCase: 'Rewards availability, redemption'
  },

  // Event Marketing Templates
  {
    id: '36',
    name: 'Event Invitation',
    category: 'Event Marketing',
    description: 'Send event invitations',
    prompt: 'Create a campaign inviting customers to our {{eventName}} on {{date}}',
    useCase: 'Event invitations, attendance'
  },
  {
    id: '37',
    name: 'Event Reminder',
    category: 'Event Marketing',
    description: 'Send event reminders',
    prompt: 'Create a campaign reminding customers about our upcoming {{eventName}}',
    useCase: 'Event reminders, attendance'
  },
  {
    id: '38',
    name: 'Event Registration',
    category: 'Event Marketing',
    description: 'Confirm event registration',
    prompt: 'Create a campaign confirming registration for {{eventName}}',
    useCase: 'Registration confirmation, event management'
  },
  {
    id: '39',
    name: 'Event Update',
    category: 'Event Marketing',
    description: 'Provide event updates',
    prompt: 'Create a campaign updating attendees about changes to {{eventName}}',
    useCase: 'Event updates, communication'
  },
  {
    id: '40',
    name: 'Event Feedback',
    category: 'Event Marketing',
    description: 'Request event feedback',
    prompt: 'Create a campaign requesting feedback for {{eventName}}',
    useCase: 'Event feedback, improvement'
  },

  // Content Marketing Templates
  {
    id: '41',
    name: 'Blog Post',
    category: 'Content Marketing',
    description: 'Share new blog content',
    prompt: 'Create a campaign sharing our latest blog post: {{title}}',
    useCase: 'Content sharing, blog promotion'
  },
  {
    id: '42',
    name: 'Newsletter',
    category: 'Content Marketing',
    description: 'Share newsletter content',
    prompt: 'Create a campaign sharing highlights from our {{month}} newsletter',
    useCase: 'Newsletter promotion, content sharing'
  },
  {
    id: '43',
    name: 'Video Content',
    category: 'Content Marketing',
    description: 'Share video content',
    prompt: 'Create a campaign sharing our new video: {{title}}',
    useCase: 'Video promotion, content sharing'
  },
  {
    id: '44',
    name: 'Case Study',
    category: 'Content Marketing',
    description: 'Share case study content',
    prompt: 'Create a campaign sharing our latest case study: {{title}}',
    useCase: 'Case study promotion, social proof'
  },
  {
    id: '45',
    name: 'Infographic',
    category: 'Content Marketing',
    description: 'Share infographic content',
    prompt: 'Create a campaign sharing our new infographic about {{topic}}',
    useCase: 'Infographic promotion, visual content'
  },

  // Social Media Templates
  {
    id: '46',
    name: 'Social Contest',
    category: 'Social Media',
    description: 'Promote social media contests',
    prompt: 'Create a campaign promoting our social media contest with {{prize}} prize',
    useCase: 'Contest promotion, engagement'
  },
  {
    id: '47',
    name: 'Social Giveaway',
    category: 'Social Media',
    description: 'Promote social media giveaways',
    prompt: 'Create a campaign announcing our social media giveaway for {{prize}}',
    useCase: 'Giveaway promotion, engagement'
  },
  {
    id: '48',
    name: 'Social Poll',
    category: 'Social Media',
    description: 'Share social media polls',
    prompt: 'Create a campaign inviting customers to participate in our social media poll about {{topic}}',
    useCase: 'Poll promotion, engagement'
  },
  {
    id: '49',
    name: 'Social Live',
    category: 'Social Media',
    description: 'Promote social media live events',
    prompt: 'Create a campaign promoting our live event on {{platform}} about {{topic}}',
    useCase: 'Live event promotion, engagement'
  },
  {
    id: '50',
    name: 'Social Challenge',
    category: 'Social Media',
    description: 'Promote social media challenges',
    prompt: 'Create a campaign promoting our social media challenge: {{challengeName}}',
    useCase: 'Challenge promotion, engagement'
  },

  // Customer Education Templates
  {
    id: '51',
    name: 'Product Tutorial',
    category: 'Customer Education',
    description: 'Share product tutorials',
    prompt: 'Create a campaign sharing our tutorial on how to use {{product}}',
    useCase: 'Product education, usage guidance'
  },
  {
    id: '52',
    name: 'Tips and Tricks',
    category: 'Customer Education',
    description: 'Share product tips and tricks',
    prompt: 'Create a campaign sharing tips and tricks for using {{product}}',
    useCase: 'Product tips, usage optimization'
  },
  {
    id: '53',
    name: 'FAQ Update',
    category: 'Customer Education',
    description: 'Share FAQ updates',
    prompt: 'Create a campaign sharing our updated FAQs about {{topic}}',
    useCase: 'FAQ updates, customer support'
  },
  {
    id: '54',
    name: 'How-to Guide',
    category: 'Customer Education',
    description: 'Share how-to guides',
    prompt: 'Create a campaign sharing our how-to guide for {{topic}}',
    useCase: 'How-to guides, customer education'
  },
  {
    id: '55',
    name: 'Best Practices',
    category: 'Customer Education',
    description: 'Share best practices',
    prompt: 'Create a campaign sharing best practices for {{topic}}',
    useCase: 'Best practices, customer guidance'
  },

  // Customer Support Templates
  {
    id: '56',
    name: 'Support Ticket',
    category: 'Customer Support',
    description: 'Handle support ticket updates',
    prompt: 'Create a campaign updating customers about their support ticket #{{ticketNumber}}',
    useCase: 'Support updates, issue tracking'
  },
  {
    id: '57',
    name: 'Support Resolution',
    category: 'Customer Support',
    description: 'Confirm support issue resolution',
    prompt: 'Create a campaign confirming resolution of support ticket #{{ticketNumber}}',
    useCase: 'Support resolution, issue closure'
  },
  {
    id: '58',
    name: 'Support Survey',
    category: 'Customer Support',
    description: 'Request support feedback',
    prompt: 'Create a campaign requesting feedback for support ticket #{{ticketNumber}}',
    useCase: 'Support feedback, quality assurance'
  },
  {
    id: '59',
    name: 'Support Escalation',
    category: 'Customer Support',
    description: 'Handle support escalation',
    prompt: 'Create a campaign informing customers about escalation of their support ticket #{{ticketNumber}}',
    useCase: 'Support escalation, issue management'
  },
  {
    id: '60',
    name: 'Support Follow-up',
    category: 'Customer Support',
    description: 'Send support follow-up',
    prompt: 'Create a campaign following up on support ticket #{{ticketNumber}}',
    useCase: 'Support follow-up, issue resolution'
  },

  // Customer Retention Templates
  {
    id: '61',
    name: 'Win-back Campaign',
    category: 'Customer Retention',
    description: 'Re-engage inactive customers',
    prompt: 'Create a campaign offering {{offer}} to win back inactive customers',
    useCase: 'Customer win-back, re-engagement'
  },
  {
    id: '62',
    name: 'Loyalty Reward',
    category: 'Customer Retention',
    description: 'Offer loyalty rewards',
    prompt: 'Create a campaign offering {{reward}} to our loyal customers',
    useCase: 'Loyalty rewards, retention'
  },
  {
    id: '63',
    name: 'Special Access',
    category: 'Customer Retention',
    description: 'Offer special access to loyal customers',
    prompt: 'Create a campaign offering special access to {{benefit}} for loyal customers',
    useCase: 'Special access, exclusivity'
  },
  {
    id: '64',
    name: 'VIP Benefits',
    category: 'Customer Retention',
    description: 'Highlight VIP benefits',
    prompt: 'Create a campaign highlighting VIP benefits for {{customerName}}',
    useCase: 'VIP benefits, retention'
  },
  {
    id: '65',
    name: 'Exclusive Preview',
    category: 'Customer Retention',
    description: 'Offer exclusive previews to loyal customers',
    prompt: 'Create a campaign offering exclusive preview of {{product}} to loyal customers',
    useCase: 'Exclusive previews, retention'
  },

  // Customer Acquisition Templates
  {
    id: '66',
    name: 'Referral Program',
    category: 'Customer Acquisition',
    description: 'Promote referral program',
    prompt: 'Create a campaign promoting our referral program with {{reward}} for successful referrals',
    useCase: 'Referral program, customer acquisition'
  },
  {
    id: '67',
    name: 'Welcome Offer',
    category: 'Customer Acquisition',
    description: 'Send welcome offers to new customers',
    prompt: 'Create a campaign offering {{offer}} to welcome new customers',
    useCase: 'Welcome offers, new customer engagement'
  },
  {
    id: '68',
    name: 'First Purchase',
    category: 'Customer Acquisition',
    description: 'Encourage first purchase',
    prompt: 'Create a campaign offering {{discount}}% off on first purchase',
    useCase: 'First purchase, conversion'
  },
  {
    id: '69',
    name: 'Trial Offer',
    category: 'Customer Acquisition',
    description: 'Offer trial periods',
    prompt: 'Create a campaign offering {{duration}} trial of {{product}}',
    useCase: 'Trial offers, product adoption'
  },
  {
    id: '70',
    name: 'Demo Request',
    category: 'Customer Acquisition',
    description: 'Request product demos',
    prompt: 'Create a campaign inviting customers to request a demo of {{product}}',
    useCase: 'Demo requests, product exploration'
  },

  // Customer Communication Templates
  {
    id: '71',
    name: 'Newsletter Signup',
    category: 'Customer Communication',
    description: 'Encourage newsletter signups',
    prompt: 'Create a campaign encouraging customers to sign up for our newsletter',
    useCase: 'Newsletter signup, communication'
  },
  {
    id: '72',
    name: 'Social Follow',
    category: 'Customer Communication',
    description: 'Encourage social media follows',
    prompt: 'Create a campaign encouraging customers to follow us on {{platform}}',
    useCase: 'Social media, engagement'
  },
  {
    id: '73',
    name: 'App Download',
    category: 'Customer Communication',
    description: 'Encourage app downloads',
    prompt: 'Create a campaign encouraging customers to download our app',
    useCase: 'App downloads, mobile engagement'
  },
  {
    id: '74',
    name: 'Profile Update',
    category: 'Customer Communication',
    description: 'Request profile updates',
    prompt: 'Create a campaign requesting customers to update their profile information',
    useCase: 'Profile updates, data management'
  },
  {
    id: '75',
    name: 'Preferences Update',
    category: 'Customer Communication',
    description: 'Request communication preferences',
    prompt: 'Create a campaign requesting customers to update their communication preferences',
    useCase: 'Preference updates, communication management'
  },

  // Customer Experience Templates
  {
    id: '76',
    name: 'Experience Survey',
    category: 'Customer Experience',
    description: 'Request experience feedback',
    prompt: 'Create a campaign requesting feedback about customer experience with {{product}}',
    useCase: 'Experience feedback, improvement'
  },
  {
    id: '77',
    name: 'Journey Map',
    category: 'Customer Experience',
    description: 'Share customer journey insights',
    prompt: 'Create a campaign sharing insights about the customer journey with {{product}}',
    useCase: 'Journey insights, experience optimization'
  },
  {
    id: '78',
    name: 'Feature Discovery',
    category: 'Customer Experience',
    description: 'Highlight product features',
    prompt: 'Create a campaign highlighting {{feature}} in {{product}}',
    useCase: 'Feature discovery, product education'
  },
  {
    id: '79',
    name: 'Usage Tips',
    category: 'Customer Experience',
    description: 'Share usage optimization tips',
    prompt: 'Create a campaign sharing tips to optimize usage of {{product}}',
    useCase: 'Usage optimization, product education'
  },
  {
    id: '80',
    name: 'Experience Improvement',
    category: 'Customer Experience',
    description: 'Announce experience improvements',
    prompt: 'Create a campaign announcing improvements to {{product}} experience',
    useCase: 'Experience improvements, updates'
  },

  // Customer Success Templates
  {
    id: '81',
    name: 'Success Story',
    category: 'Customer Success',
    description: 'Share customer success stories',
    prompt: 'Create a campaign sharing success story of {{customerName}} with {{product}}',
    useCase: 'Success stories, social proof'
  },
  {
    id: '82',
    name: 'Achievement Celebration',
    category: 'Customer Success',
    description: 'Celebrate customer achievements',
    prompt: 'Create a campaign celebrating {{achievement}} of {{customerName}}',
    useCase: 'Achievement celebration, motivation'
  },
  {
    id: '83',
    name: 'Milestone Recognition',
    category: 'Customer Success',
    description: 'Recognize customer milestones',
    prompt: 'Create a campaign recognizing {{milestone}} milestone of {{customerName}}',
    useCase: 'Milestone recognition, engagement'
  },
  {
    id: '84',
    name: 'Success Tips',
    category: 'Customer Success',
    description: 'Share success tips',
    prompt: 'Create a campaign sharing tips for success with {{product}}',
    useCase: 'Success tips, guidance'
  },
  {
    id: '85',
    name: 'Success Metrics',
    category: 'Customer Success',
    description: 'Share success metrics',
    prompt: 'Create a campaign sharing success metrics for {{customerName}}',
    useCase: 'Success metrics, progress tracking'
  },

  // Customer Advocacy Templates
  {
    id: '86',
    name: 'Review Request',
    category: 'Customer Advocacy',
    description: 'Request customer reviews',
    prompt: 'Create a campaign requesting reviews from satisfied customers',
    useCase: 'Review collection, social proof'
  },
  {
    id: '87',
    name: 'Testimonial Collection',
    category: 'Customer Advocacy',
    description: 'Collect customer testimonials',
    prompt: 'Create a campaign requesting testimonials from happy customers',
    useCase: 'Testimonial collection, social proof'
  },
  {
    id: '88',
    name: 'Referral Request',
    category: 'Customer Advocacy',
    description: 'Request customer referrals',
    prompt: 'Create a campaign requesting referrals from satisfied customers',
    useCase: 'Referral requests, customer acquisition'
  },
  {
    id: '89',
    name: 'Case Study Request',
    category: 'Customer Advocacy',
    description: 'Request case study participation',
    prompt: 'Create a campaign requesting participation in case study from successful customers',
    useCase: 'Case study collection, social proof'
  },
  {
    id: '90',
    name: 'Advocate Program',
    category: 'Customer Advocacy',
    description: 'Promote advocate program',
    prompt: 'Create a campaign promoting our customer advocate program',
    useCase: 'Advocate program, community building'
  },

  // Customer Recovery Templates
  {
    id: '91',
    name: 'Service Recovery',
    category: 'Customer Recovery',
    description: 'Handle service recovery',
    prompt: 'Create a campaign offering compensation for service issues',
    useCase: 'Service recovery, issue resolution'
  },
  {
    id: '92',
    name: 'Product Issue',
    category: 'Customer Recovery',
    description: 'Handle product issues',
    prompt: 'Create a campaign addressing product issues and offering solutions',
    useCase: 'Product issues, resolution'
  },
  {
    id: '93',
    name: 'Apology Message',
    category: 'Customer Recovery',
    description: 'Send apology messages',
    prompt: 'Create a campaign sending sincere apologies for {{issue}}',
    useCase: 'Apology messages, relationship repair'
  },
  {
    id: '94',
    name: 'Compensation Offer',
    category: 'Customer Recovery',
    description: 'Offer compensation',
    prompt: 'Create a campaign offering compensation for {{issue}}',
    useCase: 'Compensation, issue resolution'
  },
  {
    id: '95',
    name: 'Recovery Follow-up',
    category: 'Customer Recovery',
    description: 'Follow up on recovery',
    prompt: 'Create a campaign following up on recovery efforts for {{issue}}',
    useCase: 'Recovery follow-up, satisfaction check'
  },

  // Customer Education Templates
  {
    id: '96',
    name: 'Product Updates',
    category: 'Customer Education',
    description: 'Share product updates',
    prompt: 'Create a campaign sharing updates about {{product}}',
    useCase: 'Product updates, education'
  },
  {
    id: '97',
    name: 'Feature Tutorial',
    category: 'Customer Education',
    description: 'Share feature tutorials',
    prompt: 'Create a campaign sharing tutorial for {{feature}} in {{product}}',
    useCase: 'Feature tutorials, education'
  },
  {
    id: '98',
    name: 'Best Practices',
    category: 'Customer Education',
    description: 'Share best practices',
    prompt: 'Create a campaign sharing best practices for using {{product}}',
    useCase: 'Best practices, education'
  },
  {
    id: '99',
    name: 'Tips and Tricks',
    category: 'Customer Education',
    description: 'Share tips and tricks',
    prompt: 'Create a campaign sharing tips and tricks for {{product}}',
    useCase: 'Tips and tricks, education'
  },
  {
    id: '100',
    name: 'Product Guide',
    category: 'Customer Education',
    description: 'Share product guides',
    prompt: 'Create a campaign sharing comprehensive guide for {{product}}',
    useCase: 'Product guides, education'
  }
];