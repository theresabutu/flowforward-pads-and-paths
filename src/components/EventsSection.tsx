import { Calendar, MapPin, Users } from "lucide-react";

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

  const upcomingEvents = [
    {
      date: "October 2025",
      title: "Major Community Campaign",
      description: "Our biggest campaign yet to end period poverty across multiple communities. Join us in making a lasting impact.",
      image: "/lovable-uploads/4b701004-98e1-4210-a2dd-b80f11a0c45f.png",
      location: "Multiple Locations"
    }
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

        {/* Upcoming Events */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Upcoming Events</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Join us in our upcoming initiatives to create an even greater impact in the fight against period poverty.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl shadow-lg overflow-hidden border border-primary/20">
                <div className="md:flex items-center">
                  <div className="md:w-1/2">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                  
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-6">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-primary">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">Get involved and make a difference</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};