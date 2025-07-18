'use client';
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Clock, Users, AlertTriangle, Target, DragHandleDots2Icon as Grip, CheckCircle, XCircle, RotateCcw, Trophy, Calendar, Zap, GitBranch, Link2 } from 'lucide-react';

const ProjectPlanningTraining = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [exerciseData, setExerciseData] = useState({});
  const [showResults, setShowResults] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [completedExercises, setCompletedExercises] = useState(new Set());

  const exercises = [
    {
      id: 'story-estimation',
      title: 'Story Point Estimation Workshop',
      type: 'estimation',
      icon: <Target className="w-6 h-6" />,
      description: 'Practice estimating user stories using story points. Consider complexity, effort, and uncertainty.',
      instructions: 'Estimate each story using the Fibonacci sequence (1, 2, 3, 5, 8, 13, 21). Consider technical complexity, business complexity, and uncertainty.',
      stories: [
        {
          id: 'story1',
          title: 'User Login Enhancement',
          description: 'Add "Remember Me" checkbox to login form. Store preference in localStorage and auto-fill username on return visits.',
          details: 'Technical: Simple frontend change, no backend needed. Business: Low complexity, well-defined requirements.',
          correctRange: [2, 3],
          explanation: 'This is a straightforward frontend enhancement with clear requirements and minimal technical complexity.'
        },
        {
          id: 'story2',
          title: 'Payment Gateway Integration',
          description: 'Integrate Stripe payment processing for subscription billing. Include webhook handling for payment events.',
          details: 'Technical: New integration, security considerations, error handling. Business: Critical feature, complex business rules.',
          correctRange: [8, 13],
          explanation: 'High complexity due to security requirements, external API integration, and critical business impact.'
        },
        {
          id: 'story3',
          title: 'Database Query Optimization',
          description: 'Optimize slow-running reports query that currently takes 30+ seconds. Goal: reduce to under 5 seconds.',
          details: 'Technical: Requires investigation, indexing, potential schema changes. Business: Performance improvement, unclear scope.',
          correctRange: [5, 8],
          explanation: 'Medium-high complexity due to investigation needed and potential for unexpected complications.'
        },
        {
          id: 'story4',
          title: 'Fix Typo in Footer',
          description: 'Correct spelling error in copyright notice from "Copywright" to "Copyright".',
          details: 'Technical: Simple text change. Business: Minor cosmetic fix.',
          correctRange: [1, 1],
          explanation: 'Minimal effort required - simple text change with no business logic involved.'
        },
        {
          id: 'story5',
          title: 'Multi-tenant Data Architecture',
          description: 'Redesign database schema to support multiple tenants with data isolation. Migrate existing data.',
          details: 'Technical: Major architectural change, data migration, testing complexity. Business: High impact, many unknowns.',
          correctRange: [21, 21],
          explanation: 'Extremely complex with architectural implications, data migration risks, and extensive testing needs.'
        }
      ]
    },
    {
      id: 'sprint-planning',
      title: 'Sprint Planning Simulation',
      type: 'planning',
      icon: <Calendar className="w-6 h-6" />,
      description: 'Plan a 2-week sprint by selecting and prioritizing stories within team capacity.',
      instructions: 'Your team has 40 story points capacity for this sprint. Drag stories from the backlog to the sprint, considering priorities and dependencies.',
      teamCapacity: 40,
      backlogItems: [
        { id: 'item1', title: 'User Profile API', points: 8, priority: 'High', dependency: null, description: 'REST API for user profile management' },
        { id: 'item2', title: 'Profile UI Components', points: 5, priority: 'High', dependency: 'item1', description: 'Frontend components for profile display' },
        { id: 'item3', title: 'Email Notifications', points: 13, priority: 'Medium', dependency: null, description: 'Send email notifications for key events' },
        { id: 'item4', title: 'Password Reset Flow', points: 8, priority: 'High', dependency: null, description: 'Secure password reset functionality' },
        { id: 'item5', title: 'Admin Dashboard', points: 21, priority: 'Low', dependency: 'item1', description: 'Admin interface for user management' },
        { id: 'item6', title: 'Search Functionality', points: 13, priority: 'Medium', dependency: null, description: 'Add search to main interface' },
        { id: 'item7', title: 'Mobile Responsiveness', points: 8, priority: 'Medium', dependency: 'item2', description: 'Make profile UI mobile-friendly' },
        { id: 'item8', title: 'Unit Tests', points: 5, priority: 'High', dependency: 'item1', description: 'Write tests for profile API' },
        { id: 'item9', title: 'Documentation', points: 3, priority: 'Medium', dependency: null, description: 'API documentation updates' }
      ],
      optimalSelection: ['item1', 'item2', 'item4', 'item8', 'item9'] // 8+5+8+5+3 = 29 points, good mix of high priority with dependencies handled
    },
    {
      id: 'dependency-mapping',
      title: 'Dependency Analysis',
      type: 'dependencies',
      icon: <Link2 className="w-6 h-6" />,
      description: 'Identify and map dependencies between project components.',
      instructions: 'Connect related items by drawing dependency relationships. Identify potential bottlenecks and critical paths.',
      items: [
        { id: 'db-schema', title: 'Database Schema Design', x: 100, y: 50, type: 'foundation' },
        { id: 'api-layer', title: 'API Layer Development', x: 300, y: 50, type: 'backend' },
        { id: 'auth-service', title: 'Authentication Service', x: 500, y: 50, type: 'service' },
        { id: 'frontend-components', title: 'Frontend Components', x: 200, y: 200, type: 'frontend' },
        { id: 'testing-framework', title: 'Testing Framework Setup', x: 400, y: 200, type: 'testing' },
        { id: 'deployment-pipeline', title: 'Deployment Pipeline', x: 600, y: 200, type: 'infrastructure' }
      ],
      correctDependencies: [
        { from: 'db-schema', to: 'api-layer' },
        { from: 'api-layer', to: 'auth-service' },
        { from: 'api-layer', to: 'frontend-components' },
        { from: 'auth-service', to: 'frontend-components' },
        { from: 'testing-framework', to: 'deployment-pipeline' }
      ]
    },
    {
      id: 'risk-assessment',
      title: 'Risk Assessment Matrix',
      type: 'risk',
      icon: <AlertTriangle className="w-6 h-6" />,
      description: 'Evaluate and prioritize project risks using impact vs. probability analysis.',
      instructions: 'Drag each risk to the appropriate quadrant based on its probability and impact. Then prioritize your mitigation efforts.',
      risks: [
        {
          id: 'risk1',
          title: 'Key Developer Leaving',
          description: 'Senior developer might leave mid-project',
          correctQuadrant: 'medium-high', // Medium probability, high impact
          mitigation: 'Knowledge sharing sessions, documentation, backup developer training'
        },
        {
          id: 'risk2',
          title: 'Third-party API Changes',
          description: 'External API might deprecate current version',
          correctQuadrant: 'high-medium', // High probability, medium impact
          mitigation: 'Monitor API changelog, implement adapter pattern, have migration plan'
        },
        {
          id: 'risk3',
          title: 'Server Hardware Failure',
          description: 'Production server could fail unexpectedly',
          correctQuadrant: 'low-high', // Low probability, high impact
          mitigation: 'Implement redundancy, backup systems, monitoring alerts'
        },
        {
          id: 'risk4',
          title: 'Minor UI Bug',
          description: 'Small cosmetic issue in interface',
          correctQuadrant: 'high-low', // High probability, low impact
          mitigation: 'Regular testing, user feedback collection, quick fix process'
        },
        {
          id: 'risk5',
          title: 'Data Center Outage',
          description: 'Complete data center failure',
          correctQuadrant: 'low-high', // Low probability, high impact
          mitigation: 'Multi-region deployment, disaster recovery plan, regular backups'
        },
        {
          id: 'risk6',
          title: 'Scope Creep',
          description: 'Stakeholders requesting additional features',
          correctQuadrant: 'medium-medium', // Medium probability, medium impact
          mitigation: 'Clear requirements documentation, change control process, stakeholder communication'
        }
      ]
    }
  ];

  const handleEstimationSubmit = (exerciseId) => {
    const exercise = exercises.find(e => e.id === exerciseId);
    const userEstimates = exerciseData[exerciseId] || {};
    
    let correct = 0;
    let total = exercise.stories.length;
    
    const results = exercise.stories.map(story => {
      const userEstimate = parseInt(userEstimates[story.id] || 0);
      const isCorrect = userEstimate >= story.correctRange[0] && userEstimate <= story.correctRange[1];
      if (isCorrect) correct++;
      
      return {
        storyId: story.id,
        userEstimate,
        correctRange: story.correctRange,
        isCorrect,
        explanation: story.explanation
      };
    });
    
    setShowResults({ ...showResults, [exerciseId]: results });
    setTotalScore(totalScore + correct);
    setCompletedExercises(new Set([...completedExercises, exerciseId]));
  };

  const handleSprintPlanningSubmit = (exerciseId) => {
    const exercise = exercises.find(e => e.id === exerciseId);
    const selectedItems = exerciseData[exerciseId]?.selectedItems || [];
    
    const totalPoints = selectedItems.reduce((sum, itemId) => {
      const item = exercise.backlogItems.find(i => i.id === itemId);
      return sum + (item?.points || 0);
    }, 0);
    
    const withinCapacity = totalPoints <= exercise.teamCapacity;
    const hasHighPriorityItems = selectedItems.some(itemId => 
      exercise.backlogItems.find(i => i.id === itemId)?.priority === 'High'
    );
    
    const dependencyViolations = selectedItems.filter(itemId => {
      const item = exercise.backlogItems.find(i => i.id === itemId);
      return item?.dependency && !selectedItems.includes(item.dependency);
    });
    
    const score = withinCapacity && hasHighPriorityItems && dependencyViolations.length === 0 ? 1 : 0;
    
    setShowResults({ ...showResults, [exerciseId]: {
      totalPoints,
      withinCapacity,
      hasHighPriorityItems,
      dependencyViolations,
      score
    }});
    setTotalScore(totalScore + score);
    setCompletedExercises(new Set([...completedExercises, exerciseId]));
  };

  const updateExerciseData = (exerciseId, data) => {
    setExerciseData({ ...exerciseData, [exerciseId]: { ...exerciseData[exerciseId], ...data } });
  };

  const renderEstimationExercise = (exercise) => {
    const userEstimates = exerciseData[exercise.id] || {};
    const results = showResults[exercise.id];
    
    return (
      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Fibonacci Sequence Reference:</h3>
          <div className="flex gap-2 text-blue-700">
            <span className="px-2 py-1 bg-blue-100 rounded">1</span>
            <span className="px-2 py-1 bg-blue-100 rounded">2</span>
            <span className="px-2 py-1 bg-blue-100 rounded">3</span>
            <span className="px-2 py-1 bg-blue-100 rounded">5</span>
            <span className="px-2 py-1 bg-blue-100 rounded">8</span>
            <span className="px-2 py-1 bg-blue-100 rounded">13</span>
            <span className="px-2 py-1 bg-blue-100 rounded">21</span>
          </div>
        </div>
        
        {exercise.stories.map(story => {
          const result = results?.find(r => r.storyId === story.id);
          return (
            <div key={story.id} className="border rounded-lg p-4 bg-white">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{story.title}</h4>
                  <p className="text-gray-600 mt-1">{story.description}</p>
                  <p className="text-sm text-gray-500 mt-2">{story.details}</p>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <select
                    value={userEstimates[story.id] || ''}
                    onChange={(e) => updateExerciseData(exercise.id, { [story.id]: e.target.value })}
                    disabled={results}
                    className="px-3 py-1 border rounded"
                  >
                    <option value="">Select</option>
                    {[1, 2, 3, 5, 8, 13, 21].map(point => (
                      <option key={point} value={point}>{point}</option>
                    ))}
                  </select>
                  {result && (
                    <div className="flex items-center gap-1">
                      {result.isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              {result && (
                <div className={`mt-3 p-3 rounded ${result.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border`}>
                  <p className="text-sm font-medium mb-1">
                    {result.isCorrect ? 'Correct!' : 'Not quite right'}
                  </p>
                  <p className="text-sm text-gray-700">
                    Expected: {result.correctRange[0] === result.correctRange[1] ? 
                      result.correctRange[0] : 
                      `${result.correctRange[0]}-${result.correctRange[1]}`} points
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{result.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
        
        {!results && (
          <button
            onClick={() => handleEstimationSubmit(exercise.id)}
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Submit Estimates
          </button>
        )}
      </div>
    );
  };

  const renderSprintPlanningExercise = (exercise) => {
    const selectedItems = exerciseData[exercise.id]?.selectedItems || [];
    const results = showResults[exercise.id];
    
    const totalPoints = selectedItems.reduce((sum, itemId) => {
      const item = exercise.backlogItems.find(i => i.id === itemId);
      return sum + (item?.points || 0);
    }, 0);
    
    const toggleItem = (itemId) => {
      if (results) return;
      const newSelection = selectedItems.includes(itemId) 
        ? selectedItems.filter(id => id !== itemId)
        : [...selectedItems, itemId];
      updateExerciseData(exercise.id, { selectedItems: newSelection });
    };
    
    return (
      <div className="space-y-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-green-800">Sprint Capacity</h3>
            <div className="text-lg font-bold text-green-700">
              {totalPoints} / {exercise.teamCapacity} points
            </div>
          </div>
          <div className="w-full bg-green-200 rounded-full h-2 mt-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                totalPoints > exercise.teamCapacity ? 'bg-red-500' : 'bg-green-500'
              }`}
              style={{ width: `${Math.min((totalPoints / exercise.teamCapacity) * 100, 100)}%` }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Product Backlog</h3>
            <div className="space-y-2">
              {exercise.backlogItems.map(item => {
                const isSelected = selectedItems.includes(item.id);
                const hasDependency = item.dependency;
                const dependencySelected = item.dependency ? selectedItems.includes(item.dependency) : true;
                
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    } ${!dependencySelected ? 'opacity-50' : ''}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-800">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        {hasDependency && (
                          <p className="text-xs text-orange-600 mt-1">
                            Depends on: {exercise.backlogItems.find(i => i.id === item.dependency)?.title}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          item.priority === 'High' ? 'bg-red-100 text-red-800' :
                          item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {item.priority}
                        </span>
                        <div className="text-lg font-bold text-gray-700 mt-1">{item.points}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Sprint Backlog</h3>
            <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
              {selectedItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No items selected for sprint</p>
              ) : (
                <div className="space-y-2">
                  {selectedItems.map(itemId => {
                    const item = exercise.backlogItems.find(i => i.id === itemId);
                    return (
                      <div key={itemId} className="bg-white p-3 rounded border">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{item.title}</span>
                          <span className="text-gray-600">{item.points} pts</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {results && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Sprint Planning Results:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                {results.withinCapacity ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500" />
                )}
                <span>Within capacity: {results.totalPoints}/{exercise.teamCapacity} points</span>
              </div>
              <div className="flex items-center gap-2">
                {results.hasHighPriorityItems ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500" />
                )}
                <span>Includes high priority items</span>
              </div>
              <div className="flex items-center gap-2">
                {results.dependencyViolations.length === 0 ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500" />
                )}
                <span>Dependencies satisfied</span>
              </div>
              {results.dependencyViolations.length > 0 && (
                <p className="text-red-600 text-sm mt-2">
                  Missing dependencies: {results.dependencyViolations.map(id => 
                    exercise.backlogItems.find(i => i.id === id)?.title
                  ).join(', ')}
                </p>
              )}
            </div>
          </div>
        )}
        
        {!results && (
          <button
            onClick={() => handleSprintPlanningSubmit(exercise.id)}
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Complete Sprint Planning
          </button>
        )}
      </div>
    );
  };

  const renderRiskAssessmentExercise = (exercise) => {
    const riskPlacements = exerciseData[exercise.id]?.riskPlacements || {};
    const results = showResults[exercise.id];
    
    const placeRisk = (riskId, quadrant) => {
      if (results) return;
      updateExerciseData(exercise.id, { 
        riskPlacements: { ...riskPlacements, [riskId]: quadrant } 
      });
    };
    
    const submitRiskAssessment = () => {
      let correct = 0;
      const total = exercise.risks.length;
      
      exercise.risks.forEach(risk => {
        if (riskPlacements[risk.id] === risk.correctQuadrant) {
          correct++;
        }
      });
      
      setShowResults({ ...showResults, [exercise.id]: {
        correct,
        total,
        riskPlacements
      }});
      setTotalScore(totalScore + correct);
      setCompletedExercises(new Set([...completedExercises, exercise.id]));
    };
    
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 h-96 border-2 border-gray-300 rounded-lg">
          {/* High Impact, Low Probability */}
          <div className="border-r border-b border-gray-300 p-4 bg-orange-50">
            <h4 className="font-semibold text-orange-800 mb-2">High Impact, Low Probability</h4>
            <p className="text-sm text-orange-600 mb-3">Plan & Monitor</p>
            <div className="space-y-2">
              {exercise.risks.filter(risk => riskPlacements[risk.id] === 'low-high').map(risk => (
                <div key={risk.id} className="bg-white p-2 rounded border text-sm">
                  <div className="font-medium">{risk.title}</div>
                  <div className="text-gray-600">{risk.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* High Impact, High Probability */}
          <div className="border-b border-gray-300 p-4 bg-red-50">
            <h4 className="font-semibold text-red-800 mb-2">High Impact, High Probability</h4>
            <p className="text-sm text-red-600 mb-3">Immediate Action</p>
            <div className="space-y-2">
              {exercise.risks.filter(risk => riskPlacements[risk.id] === 'high-high').map(risk => (
                <div key={risk.id} className="bg-white p-2 rounded border text-sm">
                  <div className="font-medium">{risk.title}</div>
                  <div className="text-gray-600">{risk.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Low Impact, Low Probability */}
          <div className="border-r border-gray-300 p-4 bg-green-50">
            <h4 className="font-semibold text-green-800 mb-2">Low Impact, Low Probability</h4>
            <p className="text-sm text-green-600 mb-3">Monitor Only</p>
            <div className="space-y-2">
              {exercise.risks.filter(risk => riskPlacements[risk.id] === 'low-low').map(risk => (
                <div key={risk.id} className="bg-white p-2 rounded border text-sm">
                  <div className="font-medium">{risk.title}</div>
                  <div className="text-gray-600">{risk.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Low Impact, High Probability */}
          <div className="p-4 bg-yellow-50">
            <h4 className="font-semibold text-yellow-800 mb-2">Low Impact, High Probability</h4>
            <p className="text-sm text-yellow-600 mb-3">Accept & Manage</p>
            <div className="space-y-2">
              {exercise.risks.filter(risk => riskPlacements[risk.id] === 'high-low').map(risk => (
                <div key={risk.id} className="bg-white p-2 rounded border text-sm">
                  <div className="font-medium">{risk.title}</div>
                  <div className="text-gray-600">{risk.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Risk Items</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {exercise.risks.map(risk => {
              const isPlaced = riskPlacements[risk.id];
              return (
                <div key={risk.id} className={`p-3 rounded border ${isPlaced ? 'bg-gray-100 opacity-50' : 'bg-white'}`}>
                  <h4 className="font-medium text-gray-800">{risk.title}</h4>
                  <p className="text-sm text-gray-600">{risk.description}</p>
                  {!isPlaced && !results && (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => placeRisk(risk.id, 'low-high')}
                        className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded hover:bg-orange-200"
                      >
                        Low Prob, High Impact
                      </button>
                      <button
                        onClick={() => placeRisk(risk.id, 'high-high')}
                        className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200"
                      >
                        High Prob, High Impact
                      </button>
                      <button
                        onClick={() => placeRisk(risk.id, 'low-low')}
                        className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded hover:bg-green-200"
                      >
                        Low Prob, Low Impact
                      </button>
                      <button
                        onClick={() => placeRisk(risk.id, 'high-low')}
                        className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200"
                      >
                        High Prob, Low Impact
                      </button>
                    </div>
                  )}
                  {results && (
                    <div className="mt-2">
                      <div className="flex items-center gap-2">
                        {riskPlacements[risk.id] === risk.correctQuadrant ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500" />
                        )}
                        <span>
                          {riskPlacements[risk.id] === risk.correctQuadrant
                            ? 'Correct placement'
                            : `Expected: ${risk.correctQuadrant.replace('-', ' probability, ')} impact`}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Mitigation: {risk.mitigation}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {!results && (
          <button
            onClick={submitRiskAssessment}
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Submit Risk Assessment
          </button>
        )}
        
        {results && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Risk Assessment Results:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span>Total Risks: {exercise.risks.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Correct Placements: {results.correct} / {results.total}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900">Project Planning Training</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Timer: 00:00
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg flex items-center gap-2">
            <Users className="w-5 h-5" />
            Team: 3 Members
          </button>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex gap-4 mb-6">
          {exercises.map((exercise, index) => (
            <div
              key={exercise.id}
              onClick={() => setCurrentExercise(index)}
              className={`flex-1 p-4 rounded-lg cursor-pointer transition-all flex items-center gap-3 
                ${currentExercise === index ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-transparent'}
              `}
            >
              <div className="text-2xl text-blue-600">
                {exercise.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{exercise.title}</h3>
                <p className="text-sm text-gray-600">{exercise.description}</p>
              </div>
              <div className="text-gray-500">
                {currentExercise === index ? (
                  <ChevronLeft className="w-5 h-5 transform rotate-180" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-6">
          {exercises[currentExercise] && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {exercises[currentExercise].title}
              </h3>
              {currentExercise === 0 && renderEstimationExercise(exercises[currentExercise])}
              {currentExercise === 1 && renderSprintPlanningExercise(exercises[currentExercise])}
              {currentExercise === 2 && renderDependencyMappingExercise(exercises[currentExercise])}
              {currentExercise === 3 && renderRiskAssessmentExercise(exercises[currentExercise])}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPlanningTraining;