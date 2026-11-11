import { Calendar, MapPin } from "lucide-react";

export const EventsSection = () => {
  const pastEvents = [
    {
      date: "May 2024",
      title: "World Menstrual Health Day",
      description: "Sensitization of menstrual health and hygiene, workshops on making reusable pads, interactive sessions, and Q&A discussions.",
      images: [
        "/lovable-uploads/86ee83de-321f-4919-a179-3f7a2848fd04.png",
        "/lovable-uploads/a741981a-65d6-431f-9071-22e66bf9124d.png"
      ],
      location: "Agbara Grammar School, Ogun State"
    },
    {
      date: "October 11th",
      title: "International Day of the Girl Child",
      description: "Empowerment workshops focusing on breaking barriers and building confidence among young girls.",
      images: [
        "/lovable-uploads/03c8c03e-1ea8-4b60-9b84-d1bf76fd8c63.png",
        "/lovable-uploads/fc3a60d7-6c59-4c7f-be5a-cefafdbb078d.png"
      ],
      location: "Community Centers, Agbara"
    },
    {
      date: "Jan 2025",
      title: "Community Outreach",
      description: "Distribution of reusable sanitary pads and menstrual health education to community members.",
      images: [
        "/lovable-uploads/4fbbed19-fae3-4def-9865-cc84d654b996.png",
        "/lovable-uploads/24ff38e6-ec45-4507-93db-69b4b312ae77.png"
      ],
      location: "Agbara Community"
    },
    {
      date: "June 2025",
      title: "School Outreach",
      description: "Educational sessions and awareness campaigns in schools to end period stigma and promote healthy practices.",
      images: [
        "/lovable-uploads/7321be27-0cbc-40c1-9bb2-7fd1448337f0.png",
        "/lovable-uploads/dd31d237-6f86-4522-89b0-5bec97108240.png"
      ],
      location: "Local Schools, Ogun State"
    }
  ];

  const importantEvents = [
    { title: "Dear Girl Child", occasion: "International Day of the Girl Child" },
    { title: "Dignity in Every Cycle", occasion: "Menstrual Hygiene Day" },
    { title: "My Body, My Confidence", occasion: "World Health Day" },
    { title: "Green Periods, Greener Future", occasion: "World Environment Day" },
    { title: "Every Girl Deserves a Seat in the Classroom", occasion: "International Day of Education" },
    { title: "The Flowforward Woman", occasion: "International Women's Day" },
    { title: "Dear Fave, I Have a Question", occasion: "World Mental Health Day" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Past Events */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Past Events</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Celebrating our journey of empowering girls and ending period poverty through impactful events and outreach programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-2 gap-1 p-1">
                  {event.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`${event.title} - Image ${imgIndex + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Events */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Important Events</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Campaign themes inspired by the days that champion girls’ dignity, wellbeing, and opportunity.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {importantEvents.map((event) => (
              <article key={event.title} className="flex min-h-36 flex-col justify-between gap-5 rounded-md border border-primary/15 bg-card p-6 shadow-soft">
                <h3 className="text-xl font-bold leading-snug text-foreground">{event.title}</h3>
                <div className="flex items-start gap-2 text-primary">
                  <Calendar aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                  <p className="text-sm leading-relaxed">{event.occasion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};