const WebsiteInsights = () => {
  const stats = [
    {
      id: 1,
      value: "50K+",
      label: "Monthly Visitors",
      description: "Our platform attracts thousands of new users every month.",
    },
    {
      id: 2,
      value: "1M+",
      label: "Services Viewed",
      description: "Over a million services explored by our users.",
    },
    {
      id: 3,
      value: "25K+",
      label: "Satisfied Clients",
      description:
        "We’re proud to have delivered quality services to thousands.",
    },
  ];

  return (
    <section className="py-12 bg-base-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Website Insights</h2>
        <p className="max-w-2xl mx-auto mb-10">
          Heres a snapshot of how our platform is growing and thriving every
          day.
        </p>
        <div className="stats stats-vertical lg:stats-horizontal shadow mx-2">
          {stats.map((stat) => (
            <div key={stat.id} className="stat">
              <div className="stat-title">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-desc text-wrap">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteInsights;
