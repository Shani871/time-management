import React, { useState } from 'react';
import { BookOpen, Link as LinkIcon, Plus, ExternalLink } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  url: string;
  category: string;
}

function Resources() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [newResource, setNewResource] = useState({
    title: '',
    url: '',
    category: 'general'
  });

  const addResource = (e: React.FormEvent) => {
    e.preventDefault();
    const resource: Resource = {
      id: Date.now().toString(),
      ...newResource
    };
    setResources([...resources, resource]);
    setNewResource({ title: '', url: '', category: 'general' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <BookOpen className="w-6 h-6 text-yellow-600" />
        <h1 className="text-2xl font-bold text-gray-900">Study Resources</h1>
      </div>

      <form onSubmit={addResource} className="bg-white p-6 rounded-xl shadow-sm space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Resource Title
          </label>
          <input
            type="text"
            id="title"
            value={newResource.title}
            onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            Resource URL
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
              <LinkIcon className="w-4 h-4" />
            </span>
            <input
              type="url"
              id="url"
              value={newResource.url}
              onChange={(e) => setNewResource({ ...newResource, url: e.target.value })}
              className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            value={newResource.category}
            onChange={(e) => setNewResource({ ...newResource, category: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
          >
            <option value="general">General</option>
            <option value="math">Mathematics</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="english">English</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex items-center w-full justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Resource
        </button>
      </form>

      <div className="grid gap-4 md:grid-cols-2">
        {resources.map(resource => (
          <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{resource.title}</h3>
                <p className="text-sm text-gray-500 capitalize">{resource.category}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Resources;