import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TeamMember } from "@/hooks/useTeamMembers";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer border-l-4 border-l-transparent hover:border-l-purple-500">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg leading-none">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.email}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex justify-between items-center">
        <Badge variant={member.role === 'Admin' ? 'default' : 'secondary'}>
          {member.role}
        </Badge>
      </CardContent>
    </Card>
  );
}