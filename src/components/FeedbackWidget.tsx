
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, X, Star, ThumbsUp, ThumbsDown, Send } from 'lucide-react';

interface FeedbackWidgetProps {
  context?: string;
  userRole: 'candidate' | 'recruiter';
}

const FeedbackWidget: React.FC<FeedbackWidgetProps> = ({ context, userRole }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'rating' | 'suggestion' | 'issue' | null>(null);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // In a real app, this would send feedback to your backend
    console.log('Feedback submitted:', { type: feedbackType, rating, feedback, context, userRole });
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setFeedbackType(null);
      setRating(0);
      setFeedback('');
    }, 2000);
  };

  const renderRatingInput = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Rate your experience</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`p-1 transition-colors ${
                star <= rating ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              <Star className="w-6 h-6 fill-current" />
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Tell us more (optional)</label>
        <Textarea
          placeholder="What did you like or dislike about this experience?"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="min-h-20"
        />
      </div>
    </div>
  );

  const renderSuggestionInput = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Share your suggestion</label>
        <Textarea
          placeholder="How can we improve Zara AI? What features would you like to see?"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="min-h-24"
        />
      </div>
    </div>
  );

  const renderIssueInput = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Describe the issue</label>
        <Textarea
          placeholder="What problem did you encounter? Please include steps to reproduce if possible."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="min-h-24"
        />
      </div>
    </div>
  );

  if (submitted) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Card className="shadow-lg border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-green-700">
              <ThumbsUp className="w-5 h-5" />
              <span className="font-medium">Thank you for your feedback!</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-zara-purple hover:bg-zara-purple-dark shadow-lg rounded-full w-12 h-12 p-0"
        >
          <MessageSquare className="w-5 h-5" />
        </Button>
      ) : (
        <Card className="w-96 shadow-xl border-gray-200">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Share Feedback</CardTitle>
                <CardDescription>Help us improve your experience</CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            {!feedbackType ? (
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start h-auto p-4"
                  onClick={() => setFeedbackType('rating')}
                >
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <div className="text-left">
                      <div className="font-medium">Rate Experience</div>
                      <div className="text-sm text-gray-600">Share your overall satisfaction</div>
                    </div>
                  </div>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start h-auto p-4"
                  onClick={() => setFeedbackType('suggestion')}
                >
                  <div className="flex items-center gap-3">
                    <ThumbsUp className="w-5 h-5 text-blue-500" />
                    <div className="text-left">
                      <div className="font-medium">Suggest Improvement</div>
                      <div className="text-sm text-gray-600">Ideas to make Zara better</div>
                    </div>
                  </div>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start h-auto p-4"
                  onClick={() => setFeedbackType('issue')}
                >
                  <div className="flex items-center gap-3">
                    <ThumbsDown className="w-5 h-5 text-red-500" />
                    <div className="text-left">
                      <div className="font-medium">Report Issue</div>
                      <div className="text-sm text-gray-600">Something not working?</div>
                    </div>
                  </div>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFeedbackType(null)}
                  className="mb-2"
                >
                  ← Back
                </Button>
                
                {feedbackType === 'rating' && renderRatingInput()}
                {feedbackType === 'suggestion' && renderSuggestionInput()}
                {feedbackType === 'issue' && renderIssueInput()}
                
                <div className="flex items-center gap-2 pt-4">
                  <Button
                    onClick={handleSubmit}
                    disabled={
                      (feedbackType === 'rating' && rating === 0) ||
                      (feedbackType !== 'rating' && !feedback.trim())
                    }
                    className="flex-1 bg-zara-purple hover:bg-zara-purple-dark"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Feedback
                  </Button>
                </div>
                
                {context && (
                  <div className="text-center">
                    <Badge variant="outline" className="text-xs">
                      Context: {context}
                    </Badge>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FeedbackWidget;
